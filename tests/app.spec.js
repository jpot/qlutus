import { expect, test } from '@playwright/test';
import { readdirSync } from 'node:fs';

// These tests exercise the production bundle and real Howler/Web Audio.
test('build loads, queue editing works, and public assets are available', async ({ page, request }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle('Qlutus');
  const queue = page.getByRole('list', { name: 'Jono' });
  const play = page.getByRole('button', { name: /TOISTA/ });
  await expect(play).toBeDisabled();
  await page.getByRole('button', { name: 'Tämä on testi!', exact: true }).click();
  await page.getByRole('button', { name: '100', exact: true }).click();
  await expect(queue.getByRole('button')).toHaveText(['Tämä on testi! 🔊', '100 🔊']);
  await expect(play).toBeEnabled();
  await page.getByRole('button', { name: 'Tyhjennä jono' }).click();
  await expect(queue.getByRole('button')).toHaveCount(0);
  await expect(play).toBeDisabled();
  for (const asset of ['favicon.ico', 'manifest.json', 'logo192.png', 'logo512.png']) {
    const response = await request.get(`/${asset}`);
    expect(response.ok(), asset).toBe(true);
    expect(response.headers()['content-type'], asset).not.toContain('text/html');
  }
  expect(errors).toEqual([]);
});

test('all bundled audio clips are served and decode in a real browser', async ({ page }) => {
  const clips = readdirSync('build/assets').filter(file => file.endsWith('.ogg'));
  // Every catalog import must survive bundling, even if the file is very small.
  const { readFileSync } = await import('node:fs');
  const source = readFileSync('src/App.jsx', 'utf8');
  const imports = [...source.matchAll(/from '\.\/sfx\/([^']+\.ogg)'/g)];
  expect(clips).toHaveLength(imports.length);
  await page.goto('/');
  const failures = await page.evaluate(async files => {
    const audio = new AudioContext();
    const failures = [];
    for (const file of files) {
      try {
        const response = await fetch(`/assets/${encodeURIComponent(file)}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const buffer = await audio.decodeAudioData(await response.arrayBuffer());
        if (buffer.duration <= 0) throw new Error('Empty audio');
      } catch (error) {
        failures.push(`${file}: ${error.message}`);
      }
    }
    await audio.close();
    return failures;
  }, clips);
  expect(failures).toEqual([]);
});

test('real audio advances through a sequence and stops after a queue edit', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  // Observe native audio operations without replacing Howler or audio decoding.
  await page.addInitScript(() => {
    window.audioEvents = { starts: 0, stops: 0 };
    const start = AudioBufferSourceNode.prototype.start;
    const stop = AudioBufferSourceNode.prototype.stop;
    AudioBufferSourceNode.prototype.start = function (...args) {
      if (this.buffer && this.buffer.duration > 0.1) window.audioEvents.starts++;
      return start.apply(this, args);
    };
    AudioBufferSourceNode.prototype.stop = function (...args) {
      if (this.buffer && this.buffer.duration > 0.1) window.audioEvents.stops++;
      return stop.apply(this, args);
    };
  });
  await page.goto('/');
  await page.getByRole('button', { name: 'Tämä on testi!', exact: true }).click();
  await page.getByRole('button', { name: '100', exact: true }).click();
  await page.getByRole('button', { name: /TOISTA/ }).click();
  await expect.poll(() => page.evaluate(() => window.audioEvents.starts), { timeout: 15000 }).toBe(2);
  await page.getByRole('button', { name: '0', exact: true }).click();
  await page.getByRole('button', { name: 'Pysäytä toisto' }).click();
  await expect.poll(() => page.evaluate(() => window.audioEvents.stops)).toBeGreaterThan(0);
  expect(errors).toEqual([]);
});
