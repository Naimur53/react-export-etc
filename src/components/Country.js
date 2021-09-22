import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import "./Country.css";
import Item from './itemShow/Item';
const Country = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./consmetics.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            {
                data.map(item => <Item key={item._id} id={item._id} g={item.greeting}></Item>)
            }
        </div>
    );
};

export default Country;