import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Fish from '../Fish/Fish';
import "./Shop.css"
import "./Shop.css"

const Shop = () => {
        const [fishes, setFishes] = useState([]);

        useEffect(() => {
            fetch("data.json")
            .then(res => res.json())
            .then(data => setFishes(data))
        }, [])

    return (
        <div className='shop-container'>
            <div className="fishes-container">
                <h2>This is for fish</h2>
                {
                    fishes.map(fish => 
                        <Fish
                        key={fish.id}
                        fish = {fish}
                        ></Fish>)
                }
            </div>
            <div className="cart-container">
                <h3>Order cart</h3>
            </div>
        </div>
    );
};

export default Shop;