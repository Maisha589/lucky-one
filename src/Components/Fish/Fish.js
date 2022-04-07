import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "./Fish.css";

const Fish = ({fish, handleAddToCart}) => {
    const {img, name, price} = fish;
    return (
        <div className='fish'>
            <img src={img} alt="" />
            <h2 className='fish-name'>{name}</h2>
            <p className='price'><b>Price: <span className='fish-price'>${price}</span></b></p>
            <button onClick={() => handleAddToCart(fish)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Fish;