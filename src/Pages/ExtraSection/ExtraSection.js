import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './ExtraSection.css'
import img1 from '../../images/ExtraPart/calum-lewis-vA1L1jRTM70-unsplash.jpg'
import img2 from '../../images/ExtraPart/jonathan-borba-4TXhzYssRyY-unsplash.jpg'
import img3 from '../../images/ExtraPart/nathan-dumlao-As8zq82LBpw-unsplash.jpg'
import img4 from '../../images/ExtraPart/ryan-gagnon-pV6BUQRWJ6w-unsplash (1).jpg'
import img5 from '../../images/ExtraPart/joshua-j-cotten-BK-xfX8MQCk-unsplash.jpg'
import img6 from '../../images/ExtraPart/kadarius-seegars-pHV5xMJNxuU-unsplash.jpg'

const ExtraSection = () => {
    return (
        <div className='container-last'>
            <h2 className='text-primary mt-5 '>Extra section</h2>
            <div class="row row-cols-1 row-cols-md-3 g-5 p-5">
                <div class="col">
                    <div class="card">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Different Spices</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Bride</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">BirthDay Party</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Portrait</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Nature</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Wedding</h5>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExtraSection;