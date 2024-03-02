# Qlutus

Qlutus on kuulutusjärjestelmä Instanssi-demopartyyn. Julkaistu 
Instanssi 2024 -tapahtumassa Summamutikka-entrynä.

## Tarkempaa taustatarinaa

Idea syntyi 2020, mutta toteutus vähän venähti. Tämänhetkinen koodi sisältää
aika rumasti tehtyjä asioita - mm. kaikki samplet on vedetty mukaan suoraan
importilla ja muuttujanimissä on käytännössä samplen sisältö suoraan nimessä.
Homman olisi voinut tehdä elegantimminkin, mutta toisaalta Copilot osasi
täydentää kaiken niin helposti, että tyhmästi toteutettuun prototyyppiin vaivan
määrä olikin oikeastaan pienempi näin.

## Käynnistäminen

1. Asenna Node.js (ja `npm`-pakettimanageri).
2. Aja seuraavat komennot:
```
npm install
NODE_OPTIONS=--openssl-legacy-provider npm start
```
