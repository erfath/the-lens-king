import React from 'react';
import picture1 from '../../../images/ExtraPart/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg'

const Confirmation = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='me-5 mt-5'>
                <img src={picture1} alt="" />
            </div>
            <div>
            <h2>Thanks for Your Confirmation</h2>
            <p>I will Contact With you As Soon As Possible</p>
            </div>
        </div>
    );
};

export default Confirmation;