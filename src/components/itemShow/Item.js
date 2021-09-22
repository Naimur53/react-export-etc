import React from 'react';
import { addToLocalStorage, removeDb } from '../normal/storage';

const Item = (props) => {
    const handelPurches = id => {
        console.log(id);
        addToLocalStorage(id);
    }
    const handelRemove = id => {
        removeDb(id);
    }
    return (
        <div style={{ border: '2px solid blue', margin: '20px' }}>
            <h2>id: {props.id}</h2>
            <h2>greating {props.g}</h2>
            <button onClick={() => handelPurches(props.id)}>purches</button>
            <button onClick={() => handelRemove(props.id)}>remove</button>
        </div>
    );
};

export default Item;