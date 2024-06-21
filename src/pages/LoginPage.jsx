import React from 'react';
import LoginForm from '../components/Auth/LoginForm';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
    return (
        <div>
            <div className='Login_page'>
                <div className='login_wrapper'>
                    <div className='inner_wrapper'>
                    <ToastContainer />
                    <LoginForm />
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default LoginPage;
