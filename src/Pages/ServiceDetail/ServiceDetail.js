import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>Detail of service no {serviceId} </h2>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Confirm Your Booking</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;