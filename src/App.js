import React from 'react';
import logo from './logo.svg';
import './App.css';
import uifx from 'uifx';
import hyvatKavijatAudio from './sfx/hyvat_instanssi-kavijat.ogg';
import demokompoOnAudio from './sfx/demokompo_on.ogg';
import alkamassaAudio from './sfx/alkamassa.ogg';
import myohassaAudio from './sfx/myohassa.ogg';

const hyvatKavijatPlayer = new uifx(
  hyvatKavijatAudio,
  /*{
    volume: 1.0,
    throttleMs: 100
  } */
)

const demokompoOnPlayer = new uifx(demokompoOnAudio)
const alkamassaPlayer = new uifx(alkamassaAudio);
const myohassaPlayer = new uifx(myohassaAudio);

function playHyvatInstanssikavijatSound() {
  console.log("playHyvatInstanssikavijatSound()");
  hyvatKavijatPlayer.play();
}
function playDemokompoOnSound() {
  console.log("playDemokompoOnSound");
  demokompoOnPlayer.play();
}
function playAlkamassaSound() {
  console.log("playAlkamassaSound")
  alkamassaPlayer.play();
}
function playMyohassaSound() {
  console.log("playMyohassaSound")
  myohassaPlayer.play();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={playHyvatInstanssikavijatSound}>Hyvät Instanssi-kävijät</button><br />
        <button onClick={playDemokompoOnSound}>Demokompo on</button><br />
        <button onClick={playMyohassaSound}>myöhässä</button><br />

        <button onClick={playAlkamassaSound}>alkamassa</button><br />
        
        

      </header>
      
    </div>
  );
}

export default App;
