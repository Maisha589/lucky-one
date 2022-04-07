import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Fish from '../Fish/Fish';
import Order from '../Order/Order';
import "./Shop.css"
import "./Shop.css"

const Shop = () => {
        const [fishes, setFishes] = useState([]);
        const [cart, setCart] = useState([]);

        const handleAddToCart = (fish) => {
            console.log(fish);
            const newCart = [...cart,fish];
            setCart(newCart);
        }

        useEffect(() => {
            fetch("data.json")
            .then(res => res.json())
            .then(data => setFishes(data))
        }, [])

    return (
        <div className='shop-container'>
            <div className="fishes-container">
                {
                    fishes.map(fish => 
                        <Fish
                        key={fish.id}
                        fish={fish}
                        handleAddToCart={handleAddToCart}
                        ></Fish>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Details</h3>
                {
                    cart.map(fish => <Order
                        key={fish.id}
                        fish={fish}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default Shop;