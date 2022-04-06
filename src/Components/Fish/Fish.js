import React from 'react';
import "./Fish.css";

const Fish = (props) => {
    const {name, Image, price, id} = props.fish;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Price: ${price}</p>
            <p><small>It has id: {id}</small></p>
        </div>
    );
};

export default Fish;