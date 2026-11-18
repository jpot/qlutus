# Qlutus

Qlutus on kuulutusjärjestelmä Instanssi-demopartyyn. Julkaistu 
Instanssi 2024 -tapahtumassa Summamutikka-entrynä.

## Tarkempaa taustatarinaa

Idea syntyi 2020, mutta toteutus vähän venähti. Tämänhetkinen koodi sisältää
aika rumasti tehtyjä asioita - mm. kaikki samplet on vedetty mukaan suoraan
importilla ja muuttujanimissä on käytännössä samplen sisältö suoraan nimessä.
Lisäksi toisteisuutta tulee.
Homman olisi voinut tehdä elegantimminkin, mutta toisaalta Copilot osasi
täydentää kaiken niin helposti, että tyhmästi toteutettuun prototyyppiin vaivan
määrä olikin oikeastaan pienempi näin.

## Käynnistäminen

1. Asenna Node.js 22.23.2 (tai muu alla mainittu tuettu versio) ja `npm`-pakettimanageri
2. Aja seuraavat komennot:
```
npm ci
npm start
```

## Kehitys ja testaus (päivitetty 18.11.2026)

Käytä Node.js-versiota 22.22.2+ (22.x), 24.15.0+ (24.x) tai 26+.
Projektin `.nvmrc` käyttää testattua versiota 22.23.2 (`nvm use`).
Lukkotiedoston mukainen asennus ja käynnistys:

```sh
npm ci
npm start
```

Kehityspalvelin avautuu osoitteessa `http://localhost:3000`.
Tuotantoversio tehdään komennolla `npm run build`; julkaistavat tiedostot
ovat edelleen `build/`-hakemistossa. `npm run preview` esikatselee tuotantoversiota.
Suhteelliset resurssipolut mahdollistavat julkaisun myös alihakemistossa.
Vite käyttää nykyisten selainten oletuskohdetta; vanha CRA:n Browserslist-asetus
ja `npm run eject` on poistettu. JSX-tiedostojen pääte on nyt `.jsx`.

```sh
npm test                         # Vitest: 11 käyttäytymistestiä
npm run test:watch               # testien jatkuva ajo
npx playwright install chromium # selaintestien kertaluonteinen valmistelu
npm run build
npm run test:e2e                 # tuotantoversion 3 selaintestiä
npm audit                       # tunnettujen haavoittuvuuksien tarkistus
npm outdated                    # uusien suorien riippuvuusversioiden tarkistus
```

Jos Google Chrome on jo asennettu, selaintestit voi ajaa myös komennolla
`PLAYWRIGHT_CHANNEL=chrome npm run test:e2e` (macOS/Linux).
`npm run check` ajaa yksikkötestit, tuotantokäännöksen ja selaintestit järjestyksessä.
Selaintestit käynnistävät esikatselupalvelimen porttiin 4173 ja tarkistavat
myös kaikkien 137 käytössä olevan Ogg-ääniklipin latauksen ja dekoodauksen.

Toiston aikana jonon muokkaaminen tai tyhjentäminen ei muuta jo käynnissä olevaa
kuulutusta. **Pysäytä toisto** pysäyttää kuulutuksen myös jonon muokkauksen jälkeen.
**TOISTA** aloittaa nykyisen jonon alusta ja pysäyttää aiemman kuulutuksen.
Jonon yksittäisen klipin painike esikuuntelee klipin erikseen, kuten ennenkin.

GitHub Actions ajaa testit ja käännöksen pusheille ja pull requesteille.
Dependabot tarkistaa npm- ja Actions-päivitykset viikoittain. Nämä asetukset
aktivoituvat vasta, kun muutokset viedään GitHubiin.

Visuaalinen muutosraportti: [What has changed](docs/what-has-changed.html)
(avaa tiedosto selaimessa). Auditoinnin numerot ja versiot:
[dependency-audit-summary.json](docs/dependency-audit-summary.json).
