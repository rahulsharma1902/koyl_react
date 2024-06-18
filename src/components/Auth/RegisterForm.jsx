import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { login } from '../../api/auth';
import koylLogo from '../../images/koyl_logs.png'
import { useNavigate } from 'react-router-dom';


const RegsiterForm = () => {
    const { login: loginUser } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        try {
            const userData = await login(email, password);
            loginUser(userData);
            setError('');
            console.warn(userData.user_type);
            if(userData.user_type == 'admin'){
                console.log(userData);
                navigate('/admin-dashboard');
            }else if(userData.user_type == 'doctor'){

            }else{

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
                    <h2>Let’s create an account</h2>
                </div>
                
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='form_inner'>
                        <div className='form_group'>
                            <label>Location</label>
                            <input
                                className='form_control'
                                type="text"
                                placeholder="Enter your Location"
                            />
                        </div>
                        <div className='form_group'>
                            <label>Your Doctor</label>
                            <select className='form_control' name="selectdoctor" defaultValue="John Doe">
                                <option value="John Doe">John Doe</option>
                                <option value="Dr John">Dr John</option>
                            </select>
                        </div>
                        <div className='form_group'>
                            <label>Email</label>
                            <input
                                className='form_control'
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='form_group'>
                            <label>Password</label>
                            <input
                                className='form_control'
                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='form_group'>
                            <label>Re-enter Password</label>
                            <input
                                className='form_control'
                                type="password"
                                placeholder='Re-enter Password'
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

export default RegsiterForm;
