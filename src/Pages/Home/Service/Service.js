import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, price, img} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Package Fee: {price}</p>
            <button>Book Now</button>
        </div>
    );
};

export default Service;