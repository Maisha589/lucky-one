import React from 'react';
import "./Fish.css";

const Fish = (props) => {
    console.log(props.fish.img);
    const {img, name, price} = props.fish;
    return (
        <div className='fish'>
            <img src={img} alt="" />
            <h2 className='fish-name'>{name}</h2>
            <p className='price'><b>Price: <span className='fish-price'>${price}</span></b></p>
            <button>Add to cart</button>
        </div>
    );
};

export default Fish;