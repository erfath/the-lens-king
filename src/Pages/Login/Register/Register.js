import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    if(user){
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
       const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)


        console.log(email, name, password);
    }
    return (
        <div>
            <div className='container w-50 p-3'>
                <h2 className='text-primary mb-3'>Please, Register Here.</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary w-50 mb-2" type="submit">
                        Register
                    </Button>
                </Form>
                <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none'>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;