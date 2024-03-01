import React from 'react';
import './sentencePool.css';


const SentencePool = (props) => {
    return (
        <div>
            <h2>Ääniklipit kategorioittain</h2>
            {props.pool.map((category, index) => {
                return (
                    <div key={index}>
                        <h3>{category.category}</h3>
                        <ul className='sentence-pool'>
                        {category.items.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <button onClick={() => props.callBack(item)}>{item.name}</button>
                                    </li>
                                );
                        })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default SentencePool;
