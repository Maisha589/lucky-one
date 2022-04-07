import React from 'react';
import "./Order.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose} from '@fortawesome/free-solid-svg-icons';

const Order = (props) => {
    const {img, name} = props.fish;
    return (
            <div className='cart'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                 <button className='btn-close'>
                <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                </button>
            </div>
    );       
};

export default Order;