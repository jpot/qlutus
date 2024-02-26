import React from 'react';
import { Howl } from 'howler';
import './sentenceQueue.css';

const onClick = (soundElement) => {
    const sound = new Howl({ src: [Object.values(soundElement)[0]] });
    sound.play();
};
const SentenceQueue = (props) => {
    return (
        <div className='sentence-queue'>
            <h1>Sentence Queue</h1>
            <ul>
                {console.log(typeof queue)}
                {props.queue.map((element, index) => (
                    <li key={index}>
                        <button onClick={() => onClick(element.sound)}>{element.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SentenceQueue;
