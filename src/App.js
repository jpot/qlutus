import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Howl } from 'howler';
import SentenceQueue from './components/sentenceQueue/sentenceQueue';
import SentencePool from './components/sentencePool/sentencePool';

import hyvatKavijatAudio from './sfx/hyvat_instanssi-kavijat.ogg';
import alkamassaAudio from './sfx/alkamassa.ogg';
import myohassaAudio from './sfx/myohassa.ogg';
import demokompoOnAudio from './sfx/demokompo_on.ogg';
import grafiikkakompoOnAudio from './sfx/grafiikkakompo_on.ogg';
import musiikkiOnAudio from './sfx/musiikki_on.ogg';
import musiikkikompoOnAudio from './sfx/musiikkikompo_on.ogg';
import vikkelaGrafiikkaOnAudio from './sfx/vikkela_grafiikka_on.ogg';
import vikkelaMusiikkiOnAudio from './sfx/vikkela_musiikki_on.ogg';
import varjostimienNaytosotteluOnAudio from './sfx/varjostimien_naytosottelu_on.ogg';
import pikkiriikkinenDemoOnAudio from './sfx/pikkiriikkinen_demo_on.ogg';
import summamutikkaOnAudio from './sfx/summamutikka_on.ogg';
import demotyopajaAudio from './sfx/demotyopaja.ogg';
import seminaariesitysOnAudio from './sfx/seminaariesitys_on.ogg';
import palkintojenjakoAudio from './sfx/palkintojenjako.ogg';
import unohtakaapaAskeinenKuulutusAudio from './sfx/unohtakaapa_askeinen_kuulutus.ogg';
import onAudio from './sfx/on.ogg';
import uusiArvioituAlkamisaikaAudio from './sfx/uusi_arvioitu_alkamisaika_on.ogg';
import pahoittelemmeMyohastymistaAudio from './sfx/pahoittelemme_myohastymista.ogg';
import pahoittelemmeAudio from './sfx/pahoittelemme.ogg';
import meillaOnHiemanTeknisiaOngelmiaAudio from './sfx/meilla_on_hieman_teknisia_ongelmia.ogg';
import muutosOhjelmaanAudio from './sfx/muutos_ohjelmaan.ogg';
import nytAudio from './sfx/nyt_(1).ogg';
import nyt2Audio from './sfx/nyt_(2).ogg';
import kelloAudio from './sfx/kello.ogg';
import tunninAudio from './sfx/tunnin.ogg';
import tunninKuluttuaAudio from './sfx/tunnin_kuluttua.ogg';
import minuutinKuluttuaAudio from './sfx/minuutin_kuluttua.ogg'; 
import nollaAudio from './sfx/0.ogg';
import yksiAudio from './sfx/1.ogg';
import kaksiAudio from './sfx/2.ogg';
import kolmeAudio from './sfx/3.ogg';
import neljaAudio from './sfx/4.ogg';
import viisiAudio from './sfx/5.ogg';
import kuusiAudio from './sfx/6.ogg';
import seitsemanAudio from './sfx/7.ogg';
import kahdeksanAudio from './sfx/8.ogg';
import yhdeksanAudio from './sfx/9.ogg';
import kymmenenAudio from './sfx/10.ogg';
import yksitoistaAudio from './sfx/11.ogg';
import kaksitoistaAudio from './sfx/12.ogg';
import kolmetoistaAudio from './sfx/13.ogg';
import neljatoistaAudio from './sfx/14.ogg';
import viisitoistaAudio from './sfx/15.ogg';
import kuusitoistaAudio from './sfx/16.ogg';
import seitsemantoistaAudio from './sfx/17.ogg';
import kahdeksantoistaAudio from './sfx/18.ogg';
import yhdeksantoistaAudio from './sfx/19.ogg';
import kaksikymmentaAudio from './sfx/20.ogg';
import kaksikymmentayksiAudio from './sfx/21.ogg';
import kaksikymmentakaksiAudio from './sfx/22.ogg';
import kaksikymmentakolmeAudio from './sfx/23.ogg';
import kaksikymmentaneljaAudio from './sfx/24.ogg';
import kaksikymmentaviisiAudio from './sfx/25.ogg';
import kaksikymmentakuusiAudio from './sfx/26.ogg';
import kaksikymmentaseitsemanAudio from './sfx/27.ogg';
import kaksikymmentakahdeksanAudio from './sfx/28.ogg';
import kaksikymmentayhdeksanAudio from './sfx/29.ogg';
import kolmekymmentaAudio from './sfx/30.ogg';
import kolmekymmentayksiAudio from './sfx/31.ogg';
import kolmekymmentakaksiAudio from './sfx/32.ogg';
import kolmekymmentakolmeAudio from './sfx/33.ogg';
import kolmekymmentaneljaAudio from './sfx/34.ogg';
import kolmekymmentaviisiAudio from './sfx/35.ogg';
import kolmekymmentakuusiAudio from './sfx/36.ogg';
import kolmekymmentaseitsemanAudio from './sfx/37.ogg';
import kolmekymmentakahdeksanAudio from './sfx/38.ogg';
import kolmekymmentayhdeksanAudio from './sfx/39.ogg';
import neljakymmentaAudio from './sfx/40.ogg';
import neljakymmentayksiAudio from './sfx/41.ogg';
import neljakymmentakaksiAudio from './sfx/42.ogg';
import neljakymmentakolmeAudio from './sfx/43.ogg';
import neljakymmentaneljaAudio from './sfx/44.ogg';
import neljakymmentaviisiAudio from './sfx/45.ogg';
import neljakymmentakuusiAudio from './sfx/46.ogg';
import neljakymmentaseitsemanAudio from './sfx/47.ogg';
import neljakymmentakahdeksanAudio from './sfx/48.ogg';
import neljakymmentayhdeksanAudio from './sfx/49.ogg';
import viisikymmentaAudio from './sfx/50.ogg';
import viisikymmentayksiAudio from './sfx/51.ogg';
import viisikymmentakaksiAudio from './sfx/52.ogg';
import viisikymmentakolmeAudio from './sfx/53.ogg';
import viisikymmentaneljaAudio from './sfx/54.ogg';
import viisikymmentaviisiAudio from './sfx/55.ogg';
import viisikymmentakuusiAudio from './sfx/56.ogg';
import viisikymmentaseitsemanAudio from './sfx/57.ogg';
import viisikymmentakahdeksanAudio from './sfx/58.ogg';
import viisikymmentayhdeksanAudio from './sfx/59.ogg';
import kuusikymmentaAudio from './sfx/60.ogg';
import kuusikymmentayksiAudio from './sfx/61.ogg';
import kuusikymmentakaksiAudio from './sfx/62.ogg';
import kuusikymmentakolmeAudio from './sfx/63.ogg';
import kuusikymmentaneljaAudio from './sfx/64.ogg';
import kuusikymmentaviisiAudio from './sfx/65.ogg';
import kuusikymmentakuusiAudio from './sfx/66.ogg';
import kuusikymmentaseitsemanAudio from './sfx/67.ogg';
import kuusikymmentakahdeksanAudio from './sfx/68.ogg';
import kuusikymmentayhdeksanAudio from './sfx/69.ogg';
import seitsemankymmentaAudio from './sfx/70.ogg';
import seitsemankymmentayksiAudio from './sfx/71.ogg';
import seitsemankymmentakaksiAudio from './sfx/72.ogg';
import seitsemankymmentakolmeAudio from './sfx/73.ogg';
import seitsemankymmentaneljaAudio from './sfx/74.ogg';
import seitsemankymmentaviisiAudio from './sfx/75.ogg';
import seitsemankymmentakuusiAudio from './sfx/76.ogg';
import seitsemankymmentaseitsemanAudio from './sfx/77.ogg';
import seitsemankymmentakahdeksanAudio from './sfx/78.ogg';
import seitsemankymmentayhdeksanAudio from './sfx/79.ogg';
import kahdeksankymmentaAudio from './sfx/80.ogg';
import kahdeksankymmentayksiAudio from './sfx/81.ogg';
import kahdeksankymmentakaksiAudio from './sfx/82.ogg';
import kahdeksankymmentakolmeAudio from './sfx/83.ogg';
import kahdeksankymmentaneljaAudio from './sfx/84.ogg';
import kahdeksankymmentaviisiAudio from './sfx/85.ogg';
import kahdeksankymmentakuusiAudio from './sfx/86.ogg';
import kahdeksankymmentaseitsemanAudio from './sfx/87.ogg';
import kahdeksankymmentakahdeksanAudio from './sfx/88.ogg';
import kahdeksankymmentayhdeksanAudio from './sfx/89.ogg';
import yhdeksankymmentaAudio from './sfx/90.ogg';
import yhdeksankymmentayksiAudio from './sfx/91.ogg';
import yhdeksankymmentakaksiAudio from './sfx/92.ogg';
import yhdeksankymmentakolmeAudio from './sfx/93.ogg';
import yhdeksankymmentaneljaAudio from './sfx/94.ogg';
import yhdeksankymmentaviisiAudio from './sfx/95.ogg';
import yhdeksankymmentakuusiAudio from './sfx/96.ogg';
import yhdeksankymmentaseitsemanAudio from './sfx/97.ogg';
import yhdeksankymmentakahdeksanAudio from './sfx/98.ogg';
import yhdeksankymmentayhdeksanAudio from './sfx/99.ogg';
import sataAudio from './sfx/100.ogg';

import saunaOnAudio from './sfx/sauna_on.ogg';
import lamminAudio from './sfx/lammin.ogg';
import kylmaAudio from './sfx/kylma.ogg';
import unisexSaunaOnAudio from './sfx/unisex-sauna_on.ogg';
import miestenSaunavuoroOnAudio from './sfx/miesten_saunavuoro_on.ogg';
import naistenSaunavuoroOnAudio from './sfx/naisten_saunavuoro_on.ogg';

import kayKatsomassaNettisivummeOsoitteessaInstanssiPisteOrgAudio from './sfx/kay_katsomassa_nettisivumme_osoitteessa_instanssi_piste_org.ogg';
import tamaOnTestiAudio from './sfx/tama_on_testi.ogg';

const sentencePool = [
  {
    category: 'Yleinen',
    items: [
      { name: 'Hyvät Instanssi-kävijät!', sound: {hyvatKavijatAudio}},
      { name: 'alkamassa', sound: {alkamassaAudio}},
      { name: 'myöhässä', sound: {myohassaAudio}},
      { name: 'on', sound: {onAudio}},
      { name: 'Unohtakaapa äskeinen kuulutus!', sound: {unohtakaapaAskeinenKuulutusAudio}},
      { name: 'Pahoittelemme myöhästymistä', sound: {pahoittelemmeMyohastymistaAudio}},
      { name: 'Pahoittelemme!', sound: {pahoittelemmeAudio}},
      { name: 'Meillä on hieman teknisiä ongelmia', sound: {meillaOnHiemanTeknisiaOngelmiaAudio}},
      { name: 'Käy katsomassa nettisivumme osoitteessa instanssi.org', sound: {kayKatsomassaNettisivummeOsoitteessaInstanssiPisteOrgAudio}},
      { name: 'Tämä on testi!', sound: {tamaOnTestiAudio}},
    ]
  },
  {
    category: 'Kompot ja ohjelmanumerot',
    items: [
      { name: 'Muutos ohjelmaan', sound: {muutosOhjelmaanAudio}},
      { name: 'Demokompo on', sound: {demokompoOnAudio}},
      { name: 'Grafiikkakompo on', sound: {grafiikkakompoOnAudio}},
      { name: 'Vikkelä grafiikka on', sound: {vikkelaGrafiikkaOnAudio}},
      { name: 'Musiikki on', sound: {musiikkiOnAudio}},
      { name: 'Musiikkikompo on', sound: {musiikkikompoOnAudio}},
      { name: 'Vikkelä musiikki on', sound: {vikkelaMusiikkiOnAudio}},
      { name: 'Varjostimien näytösottelu on', sound: {varjostimienNaytosotteluOnAudio}},
      { name: 'Summamutikka on', sound: {summamutikkaOnAudio}},
      { name: 'Pikkiriikkinen demo on', sound: {pikkiriikkinenDemoOnAudio}},
      { name: 'Demotyöpaja', sound: {demotyopajaAudio}},
      { name: 'Seminaariesitys on', sound: {seminaariesitysOnAudio}},
      { name: 'Palkintojenjako', sound: {palkintojenjakoAudio}},
    ]
  },
  {
    category: 'Kellonajat ja numerot',
    items: [
      { name: 'kello', sound: {kelloAudio}},
      { name: 'Uusi arvioitu alkamisaika on', sound: {uusiArvioituAlkamisaikaAudio}},
      { name: 'nyt (1)', sound: {nytAudio}},
      { name: 'nyt (2)', sound: {nyt2Audio}},
      { name: 'tunnin', sound: {tunninAudio}},
      { name: 'tunnin kuluttua', sound: {tunninKuluttuaAudio}},
      { name: 'minuutin kuluttua', sound: {minuutinKuluttuaAudio}},
      { name: '0', sound: { nollaAudio } },
      { name: '1', sound: { yksiAudio } },
      { name: '2', sound: { kaksiAudio } },
      { name: '3', sound: { kolmeAudio } },
      { name: '4', sound: { neljaAudio } },
      { name: '5', sound: { viisiAudio } },
      { name: '6', sound: { kuusiAudio } },
      { name: '7', sound: { seitsemanAudio } },
      { name: '8', sound: { kahdeksanAudio } },
      { name: '9', sound: { yhdeksanAudio } },
      { name: '10', sound: { kymmenenAudio } },
      { name: '11', sound: { yksitoistaAudio } },
      { name: '12', sound: { kaksitoistaAudio } },
      { name: '13', sound: { kolmetoistaAudio } },
      { name: '14', sound: { neljatoistaAudio } },
      { name: '15', sound: { viisitoistaAudio } },
      { name: '16', sound: { kuusitoistaAudio } },
      { name: '17', sound: { seitsemantoistaAudio } },
      { name: '18', sound: { kahdeksantoistaAudio } },
      { name: '19', sound: { yhdeksantoistaAudio } },
      { name: '20', sound: { kaksikymmentaAudio } },
      { name: '21', sound: { kaksikymmentayksiAudio } },
      { name: '22', sound: { kaksikymmentakaksiAudio } },
      { name: '23', sound: { kaksikymmentakolmeAudio } },
      { name: '24', sound: { kaksikymmentaneljaAudio } },
      { name: '25', sound: { kaksikymmentaviisiAudio } },
      { name: '26', sound: { kaksikymmentakuusiAudio } },
      { name: '27', sound: { kaksikymmentaseitsemanAudio } },
      { name: '28', sound: { kaksikymmentakahdeksanAudio } },
      { name: '29', sound: { kaksikymmentayhdeksanAudio } },
      { name: '30', sound: { kolmekymmentaAudio } },
      { name: '31', sound: { kolmekymmentayksiAudio } },
      { name: '32', sound: { kolmekymmentakaksiAudio } },
      { name: '33', sound: { kolmekymmentakolmeAudio } },
      { name: '34', sound: { kolmekymmentaneljaAudio } },
      { name: '35', sound: { kolmekymmentaviisiAudio } },
      { name: '36', sound: { kolmekymmentakuusiAudio } },
      { name: '37', sound: { kolmekymmentaseitsemanAudio } },
      { name: '38', sound: { kolmekymmentakahdeksanAudio } },
      { name: '39', sound: { kolmekymmentayhdeksanAudio } },
      { name: '40', sound: { neljakymmentaAudio } },
      { name: '41', sound: { neljakymmentayksiAudio } },
      { name: '42', sound: { neljakymmentakaksiAudio } },
      { name: '43', sound: { neljakymmentakolmeAudio } },
      { name: '44', sound: { neljakymmentaneljaAudio } },
      { name: '45', sound: { neljakymmentaviisiAudio } },
      { name: '46', sound: { neljakymmentakuusiAudio } },
      { name: '47', sound: { neljakymmentaseitsemanAudio } },
      { name: '48', sound: { neljakymmentakahdeksanAudio } },
      { name: '49', sound: { neljakymmentayhdeksanAudio } },
      { name: '50', sound: { viisikymmentaAudio } },
      { name: '51', sound: { viisikymmentayksiAudio } },
      { name: '52', sound: { viisikymmentakaksiAudio } },
      { name: '53', sound: { viisikymmentakolmeAudio } },
      { name: '54', sound: { viisikymmentaneljaAudio } },
      { name: '55', sound: { viisikymmentaviisiAudio } },
      { name: '56', sound: { viisikymmentakuusiAudio } },
      { name: '57', sound: { viisikymmentaseitsemanAudio } },
      { name: '58', sound: { viisikymmentakahdeksanAudio } },
      { name: '59', sound: { viisikymmentayhdeksanAudio } },
      { name: '60', sound: { kuusikymmentaAudio } },
      { name: '61', sound: { kuusikymmentayksiAudio } },
      { name: '62', sound: { kuusikymmentakaksiAudio } },
      { name: '63', sound: { kuusikymmentakolmeAudio } },
      { name: '64', sound: { kuusikymmentaneljaAudio } },
      { name: '65', sound: { kuusikymmentaviisiAudio } },
      { name: '66', sound: { kuusikymmentakuusiAudio } },
      { name: '67', sound: { kuusikymmentaseitsemanAudio } },
      { name: '68', sound: { kuusikymmentakahdeksanAudio } },
      { name: '69', sound: { kuusikymmentayhdeksanAudio } },
      { name: '70', sound: { seitsemankymmentaAudio } },
      { name: '71', sound: { seitsemankymmentayksiAudio } },
      { name: '72', sound: { seitsemankymmentakaksiAudio } },
      { name: '73', sound: { seitsemankymmentakolmeAudio } },
      { name: '74', sound: { seitsemankymmentaneljaAudio } },
      { name: '75', sound: { seitsemankymmentaviisiAudio } },
      { name: '76', sound: { seitsemankymmentakuusiAudio } },
      { name: '77', sound: { seitsemankymmentaseitsemanAudio } },
      { name: '78', sound: { seitsemankymmentakahdeksanAudio } },
      { name: '79', sound: { seitsemankymmentayhdeksanAudio } },
      { name: '80', sound: { kahdeksankymmentaAudio } },
      { name: '81', sound: { kahdeksankymmentayksiAudio } },
      { name: '82', sound: { kahdeksankymmentakaksiAudio } },
      { name: '83', sound: { kahdeksankymmentakolmeAudio } },
      { name: '84', sound: { kahdeksankymmentaneljaAudio } },
      { name: '85', sound: { kahdeksankymmentaviisiAudio } },
      { name: '86', sound: { kahdeksankymmentakuusiAudio } },
      { name: '87', sound: { kahdeksankymmentaseitsemanAudio } },
      { name: '88', sound: { kahdeksankymmentakahdeksanAudio } },
      { name: '89', sound: { kahdeksankymmentayhdeksanAudio } },
      { name: '90', sound: { yhdeksankymmentaAudio } },
      { name: '91', sound: { yhdeksankymmentayksiAudio } },
      { name: '92', sound: { yhdeksankymmentakaksiAudio } },
      { name: '93', sound: { yhdeksankymmentakolmeAudio } },
      { name: '94', sound: { yhdeksankymmentaneljaAudio } },
      { name: '95', sound: { yhdeksankymmentaviisiAudio } },
      { name: '96', sound: { yhdeksankymmentakuusiAudio } },
      { name: '97', sound: { yhdeksankymmentaseitsemanAudio } },
      { name: '98', sound: { yhdeksankymmentakahdeksanAudio } },
      { name: '99', sound: { yhdeksankymmentayhdeksanAudio } },
      { name: '100', sound: { sataAudio } },
    ]
  },
  { 
    category: 'Sauna',
    items: [
      { name: 'Sauna on', sound: {saunaOnAudio}},
      { name: 'lämmin', sound: {lamminAudio}},
      { name: 'kylmä', sound: {kylmaAudio}},
      { name: 'unisex-sauna on', sound: {unisexSaunaOnAudio}},
      { name: 'miesten saunavuoro on', sound: {miestenSaunavuoroOnAudio}},
      { name: 'naisten saunavuoro on', sound: {naistenSaunavuoroOnAudio}},
    ]
  }

];



function App() {
  const [sentenceQueue, setSentenceQueue] = useState([]);

  let currentSound;

  /**
   * Play a sequence of sounds from a queue
   */
  function playSoundSequence(queue, index) {
    if (index < queue.length) {
      currentSound = new Howl({ src: [Object.values(queue[index].sound)][0] });
      console.log(currentSound);
      console.log(currentSound.play);
      currentSound.play();
      currentSound.on('end', () => {
        console.log('Sound has finished playing. Add the next one with number: ', index+1)
        playSoundSequence(queue, index + 1);
      });
    }
  }

  const addSoundToQueue = (sound) => {
    console.log('Adding sound to queue: ', sound);
    setSentenceQueue([...sentenceQueue, sound]);
    console.log(sentenceQueue)
  }

  function stopAudio() {
    currentSound && currentSound.stop();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Qlutus</h1>
        {/*<img src={logo} className="App-logo" alt="logo" /> */}
        <div className="header-buttons">
          <button className="playButton" disabled={sentenceQueue.length === 0} onClick={() => playSoundSequence(sentenceQueue, 0)}>⏵ TOISTA 🔊</button><br />
          <button className="stopButton" onClick={stopAudio}>Pysäytä toisto</button>
        </div>
      </header>
      <SentenceQueue queue={sentenceQueue} setSentenceQueue={setSentenceQueue} />
      <SentencePool pool={sentencePool} callBack={addSoundToQueue} />
      
      
      
    </div>
  );
}

export default App;
