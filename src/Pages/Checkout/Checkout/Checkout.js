import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    return (
        <div>
            <div className='booking-done'>
                <h4 className='pt-3'>Please, Give Me Some Information</h4>
                <div className='d-flex justify-content-evenly align-items-center'>
                    <div className='confirm-form'>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Phone Number" required />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Your Address</Form.Label>
                                <Form.Control placeholder="Your Address" required />
                            </Form.Group>

                            <Button as={Link} to='/confirmation' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;