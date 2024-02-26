import React from 'react';


const SentencePool = (props) => {
    return (
        <div>
            <h1>Sentence Pool</h1>
            <ul>
                {props.pool.map((element, index) => (
                    <li key={index}>
                        <button onClick={() => props.callBack(element)}>{element.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SentencePool;
