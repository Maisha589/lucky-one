import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Fish from '../Fish/Fish';
import Order from '../Order/Order';
import SuggestedOrder from '../SuggestOrder/SuggestedOrder';
import "./Shop.css"
import "./Shop.css"

const Shop = () => {
        const [fishes, setFishes] = useState([]);
        const [cart, setCart] = useState([]);

        const handleAddToCart = (fish) => {
            const newCart = [...cart,fish];
            if(newCart.length <= 4 ){
                setCart(newCart);
            }
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
                <h2><u>Order Details</u></h2>
                {
                    cart.map(fish => <Order
                        key={fish.id}
                        fish={fish}
                    ></Order>)
                }
                <SuggestedOrder key={cart.id} cart={cart} setCart={setCart}></SuggestedOrder>
            </div>
            

        </div>
    );
};

export default Shop;