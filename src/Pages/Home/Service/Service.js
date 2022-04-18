import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, price, img, description, duration} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
            navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h5>Duration: {duration}</h5>
            <p> <strong>Pricing: ${price}</strong> </p>
            <button onClick={()=> navigateToServiceDetail(id)} className="btn btn-primary" >Purchase</button>
        </div>
    );
};

export default Service;