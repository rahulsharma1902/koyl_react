import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { login } from '../../api/auth';
import koylLogo from '../../images/koyl_logs.png'

const LoginForm = () => {
    const { login: loginUser } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        try {
            const userData = await login(email, password);
            loginUser(userData);
            setError('');
        } catch (err) {
            setError(err.message);
        }
    };
    
    return (
        <div>
            <div className='form_wrapper'>
                <div className='form_header'>
                    <img src={koylLogo} className='Form_logo' alt="Logo" />
                    <h2>Log in to your account</h2>
                    <p>Welcome back! Please enter your details.</p>
                </div>
                
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='form_inner'>
                        <div className='form_group'>
                            <label>Email:</label>
                            <input
                                className='form_control'
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='form_group'>
                            <label>Password:</label>
                            <input
                                className='form_control'
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='form_button_group'>
                            <button type="submit" class="cta cta_sky">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
