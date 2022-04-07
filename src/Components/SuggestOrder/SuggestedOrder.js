import React from 'react';

const SuggestedOrder = (props) => {
    // const {name} = props.fish;
    console.log(props);
    return (
        <div>
            <button className='btn-suggest'>Suggest one </button>
            <h2>{props.name}</h2>
            <button className='btn-remove'>Choose again</button>
        </div>
    );
};

export default SuggestedOrder;