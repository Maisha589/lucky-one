import React from 'react';

const SuggestedOrder = ({cart, setCart}) => {

    const suggestedFish = (cart) => {
        console.log();
        
          if(cart.length > 0){
           const newFish = Math.floor(Math.random()*cart.length);
            console.log(newFish);
        setCart([cart[newFish]]);
          }
    }

    const remove = (cart) => {
        setCart([]);
    }



    return (
        <div>
            <button onClick={() => suggestedFish(cart)} className='btn-suggest'>Suggest one </button>
            <button onClick={()  =>remove(cart)} className='btn-remove'>Choose again</button>
        </div>
    );
};

export default SuggestedOrder;