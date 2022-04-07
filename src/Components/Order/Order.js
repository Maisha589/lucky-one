import React from 'react';

const Order = (props) => {
    const {img, name, price} = props.fish;
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default Order;