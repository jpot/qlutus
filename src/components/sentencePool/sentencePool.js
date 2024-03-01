import React from 'react';


const SentencePool = (props) => {
    return (
        <div>
            {props.pool.map((category, index) => {
                return (
                    <div key={index}>
                        <h2>{category.category}</h2>
                        <ul>
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
