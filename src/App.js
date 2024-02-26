import React, { useState } from 'react';
import logo from './logo.svg';
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
  { name: 'Hyvät Instanssi-kävijät!', sound: { hyvatKavijatAudio } },
  { name: 'Demokompo on', sound: { demokompoOnAudio } },
  { name: 'alkamassa', sound: { alkamassaAudio } },
  { name: 'myöhässä', sound: { myohassaAudio } }
];

/**
 * Play a sequence of sounds from a queue
 */
function playSoundSequence(queue, index) {
  if (index < queue.length) {
    const sound = new Howl({ src: [Object.values(queue[index].sound)][0] });
    console.log(sound);
    console.log(sound.play);
    sound.play();
    sound.on('end', () => {
      console.log('Sound has finished playing. Add the next one with number: ', index+1)
      playSoundSequence(queue, index + 1);
    });
  }
}



function App() {
  const [sentenceQueue, setSentenceQueue] = useState([]);

  const addSoundToQueue = (sound) => {
    console.log('Adding sound to queue: ', sound);
    setSentenceQueue([...sentenceQueue, sound]);
    console.log(sentenceQueue)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <SentenceQueue queue={sentenceQueue} />
      <button onClick={() => setSentenceQueue([])}>Tyhjennä jono</button>
      <SentencePool pool={sentencePool} callBack={addSoundToQueue} />
      <button onClick={() => playSoundSequence(sentenceQueue, 0)}>Soita äänet peräkkäin</button><br />
    </div>
  );
}

export default App;
