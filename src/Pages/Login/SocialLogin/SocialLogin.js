import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/Social/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMessage;
    if (error) {
        errorMessage = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorMessage}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info fs-5 w-50'>
                    <img style={{ width: '30px' }} src={google} alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;