import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Howl } from 'howler';
import App from './App';

const { sounds } = vi.hoisted(() => ({ sounds: [] }));
vi.mock('howler', () => ({
  Howl: vi.fn(function (options) {
    this.options = options;
    this.handlers = {};
    this.play = vi.fn();
    this.stop = vi.fn();
    this.unload = vi.fn();
    this.once = vi.fn((event, callback) => {
      this.handlers[event] = callback;
      return this;
    });
    sounds.push(this);
  }),
}));

const queue = () => within(screen.getByRole('list', { name: 'Jono' }));
const play = () => screen.getByRole('button', { name: /TOISTA/ });
const stop = () => screen.getByRole('button', { name: 'Pysäytä toisto' });
const add = (user, name) => user.click(screen.getByRole('button', { name, exact: true }));

beforeEach(() => { sounds.length = 0; });

describe('announcement queue', () => {
  it('shows the catalog and starts with an empty queue', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Qlutus' })).toBeInTheDocument();
    for (const name of ['Yleinen', 'Kompot ja ohjelmanumerot', 'Kellonajat ja numerot', 'Sauna']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument();
    }
    expect(queue().queryAllByRole('listitem')).toHaveLength(0);
    expect(play()).toBeDisabled();
    expect(Howl).not.toHaveBeenCalled();
  });

  it('adds duplicates in order and clears the queue', async () => {
    const user = userEvent.setup();
    render(<App />);
    await add(user, 'Tämä on testi!');
    await add(user, '100');
    await add(user, 'Tämä on testi!');
    expect(queue().getAllByRole('button').map(button => button.textContent))
      .toEqual(['Tämä on testi! 🔊', '100 🔊', 'Tämä on testi! 🔊']);
    expect(play()).toBeEnabled();
    await user.click(screen.getByRole('button', { name: 'Tyhjennä jono' }));
    expect(queue().queryAllByRole('listitem')).toHaveLength(0);
    expect(play()).toBeDisabled();
    expect(Howl).not.toHaveBeenCalled();
  });

  it('previews a queued clip using its actual asset URL', async () => {
    const user = userEvent.setup();
    render(<App />);
    await add(user, 'Tämä on testi!');
    await user.click(queue().getByRole('button'));
    expect(sounds[0].options.src).toEqual([expect.stringContaining('tama_on_testi.ogg')]);
    expect(sounds[0].play).toHaveBeenCalledOnce();
  });
});

describe('sequence playback', () => {
  async function setup() {
    const user = userEvent.setup();
    const view = render(<App />);
    await add(user, 'Tämä on testi!');
    await add(user, '100');
    await user.click(play());
    return { user, ...view };
  }

  it('plays clips sequentially and releases each finished sound', async () => {
    await setup();
    expect(sounds).toHaveLength(1);
    expect(sounds[0].options.src).toEqual([expect.stringContaining('tama_on_testi.ogg')]);
    expect(sounds[0].play).toHaveBeenCalledOnce();
    act(() => sounds[0].handlers.end());
    expect(sounds[0].unload).toHaveBeenCalledOnce();
    expect(sounds).toHaveLength(2);
    expect(sounds[1].options.src).toEqual([expect.stringContaining('/100.ogg')]);
    expect(sounds[1].play).toHaveBeenCalledOnce();
    act(() => sounds[1].handlers.end());
    expect(sounds[1].unload).toHaveBeenCalledOnce();
    expect(sounds).toHaveLength(2);
  });

  it('can stop after editing the queue and ignores a late end event', async () => {
    const { user } = await setup();
    await add(user, '0');
    await user.click(stop());
    expect(sounds[0].stop).toHaveBeenCalledOnce();
    expect(sounds[0].unload).toHaveBeenCalledOnce();
    act(() => sounds[0].handlers.end());
    expect(sounds).toHaveLength(1);
  });

  it('restarts without overlapping the previous sequence', async () => {
    const { user } = await setup();
    await user.click(play());
    expect(sounds[0].stop).toHaveBeenCalledOnce();
    expect(sounds[0].unload).toHaveBeenCalledOnce();
    expect(sounds).toHaveLength(2);
    act(() => sounds[0].handlers.end());
    expect(sounds).toHaveLength(2);
    act(() => sounds[1].handlers.end());
    expect(sounds).toHaveLength(3);
    expect(sounds[2].options.src[0]).toContain('/100.ogg');
  });

  it('keeps the playing snapshot when the queue is cleared', async () => {
    const { user } = await setup();
    await user.click(screen.getByRole('button', { name: 'Tyhjennä jono' }));
    act(() => sounds[0].handlers.end());
    expect(sounds).toHaveLength(2);
    expect(sounds[1].options.src[0]).toContain('/100.ogg');
    await user.click(stop());
    expect(sounds[1].stop).toHaveBeenCalledOnce();
  });

  it.each(['loaderror', 'playerror'])('stops safely on %s and permits retry', async event => {
    const { user } = await setup();
    act(() => sounds[0].handlers[event]());
    expect(sounds[0].stop).toHaveBeenCalledOnce();
    expect(sounds[0].unload).toHaveBeenCalledOnce();
    await user.click(play());
    expect(sounds).toHaveLength(2);
    expect(sounds[1].play).toHaveBeenCalledOnce();
  });

  it('stops and releases playback on unmount', async () => {
    const { unmount } = await setup();
    unmount();
    expect(sounds[0].stop).toHaveBeenCalledOnce();
    expect(sounds[0].unload).toHaveBeenCalledOnce();
    act(() => sounds[0].handlers.end());
    expect(sounds).toHaveLength(1);
  });

  it('allows stopping an empty queue', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(stop());
    expect(Howl).not.toHaveBeenCalled();
  });
});
