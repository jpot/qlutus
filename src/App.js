import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Howl } from 'howler';
import hyvatKavijatAudio from './sfx/hyvat_instanssi-kavijat.ogg';
import demokompoOnAudio from './sfx/demokompo_on.ogg';
import alkamassaAudio from './sfx/alkamassa.ogg';
import myohassaAudio from './sfx/myohassa.ogg';
import SentenceQueue from './components/sentenceQueue/sentenceQueue';
import SentencePool from './components/sentencePool/sentencePool';

// const sounds = [
//   {hyvatKavijatAudio},
//   {demokompoOnAudio},
//   {alkamassaAudio},
//   {myohassaAudio}
// ];



const sentencePool = [
  {
    category: 'Yleinen',
    items: [
      { name: 'Hyvät Instanssi-kävijät!', sound: {hyvatKavijatAudio}},
      { name: 'Demokompo on', sound: {demokompoOnAudio}},
      { name: 'alkamassa', sound: {alkamassaAudio}},
      { name: 'myöhässä', sound: {myohassaAudio}}
    ]
  },
  {
    category: 'Kellonajat',
    items: [
      /*{ name: '0', sound: { nollaAudio } },
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
      { name: '12', sound: { kaksitoistaAudio } }, */
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
    currentSound.stop();
  }

  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <SentenceQueue queue={sentenceQueue} />
      <button onClick={() => setSentenceQueue([])}>Tyhjennä jono</button>
      <SentencePool pool={sentencePool} callBack={addSoundToQueue} />
      <button onClick={() => playSoundSequence(sentenceQueue, 0)}>Soita äänet peräkkäin</button><br />
      <button onClick={stopAudio}>Pysäytä toisto</button>
    </div>
  );
}

export default App;
