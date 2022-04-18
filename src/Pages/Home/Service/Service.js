import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, price, img} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
            navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Package Fee: {price}</p>
            <button onClick={()=> navigateToServiceDetail(id)} className="btn btn-primary" >Details</button>
        </div>
    );
};

export default Service;