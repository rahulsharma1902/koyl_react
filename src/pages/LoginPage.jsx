import React from 'react';
import LoginForm from '../components/Auth/LoginForm';

const LoginPage = () => {
    return (
        <div>
            <div className='Login_page'>
                <div className='login_wrapper'>
                    <div className='inner_wrapper'>
                    <LoginForm />
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default LoginPage;
