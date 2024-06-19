import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { login } from '../../api/auth';
import koylLogo from '../../images/koyl_logs.png'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const { login: loginUser } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate(); 

    const validateForm = () => {
        const errors = {};
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
        if (!password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const handleSubmit = async (e) => { 
        e.preventDefault(); 

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        try {
            const userData = await login(email, password);
            loginUser(userData);
            setError('');
            console.warn(userData.user_type);
            if (userData.user_type === 'admin') {
                console.log(userData);
                navigate('/admin-dashboard');
            } else if (userData.user_type === 'doctor') {
                // Navigate to doctor dashboard
            } else {
                // Navigate to other user type dashboard
            }
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
                                className={`form_control ${formErrors.email ? 'error' : ''}`}
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {formErrors.email && <span className='error_message'>{formErrors.email}</span>}
                        </div>
                        <div className='form_group'>
                            <label>Password:</label>
                            <input
                                className={`form_control ${formErrors.password ? 'error' : ''}`}
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {formErrors.password && <span className='error_message'>{formErrors.password}</span>}
                        </div>
                        <div className='form_button_group'>
                            <button type="submit" className="cta cta_sky">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
