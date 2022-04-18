import React from 'react';
import sleepy from '../../../images/sleepy.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger'>Oh No! Photographer isn't free Yet!</h2>
            <img className='w-100' src={sleepy} alt="" />
        </div>
    );
};

export default NotFound;