import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner1.jpg'
import banner2 from '../../../images/Banner/banner2.jpg'
import banner3 from '../../../images/Banner/banner3.jpg'
import banner4 from '../../../images/Banner/banner4.jpg'


const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Life is Aswesome</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Capture Your Memory</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Live like Photo</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner4}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Capture Your Memory</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;