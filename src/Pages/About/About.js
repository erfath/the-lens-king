import React from 'react';
import myPic from '../../images/my.jpeg'
import './About.css'
const About = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
           <div className='img mt-5'>
            <img style={{height:'400px'}} src={myPic} alt="" />
           </div>
           <div className='about-me w-25'>
           <p>My Name is Erfath Parvez. I study in China. The name of my University is 'Wuzhou University'</p>
            <p>I want to be Web Developer. Thats why i am doing this course. Thank you Jhankar vaiya for everything.</p>
            <p>Contact: erfathparvez1@gmail.com</p>
           </div>
        </div>
    );
};

export default About;