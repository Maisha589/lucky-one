import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <h3>How React works?</h3>
            <p>React is a JavaScript library which builds user interface. React works through implementing a virtual DOM which is mainly a DOM tree representation in JAvascript. Whenever, we write any code it makes a browser DOM. Then it compare both virtual and browser DOM tree and represent the updated DOM. React elements are plain objects and are cheap to create.  </p>
            <h3>Different between props and state-</h3>
            <p><b>Props:</b> It is used to pass data from component to another. It cannot be modified. It is read only property. </p>
            <p><b>State:</b> It cannot pass any data. It is a JavaScript object. It can share data only within the component.</p>
            <p className='copyright'>copyright 2022</p>
        </div>
    );
};

export default Footer;