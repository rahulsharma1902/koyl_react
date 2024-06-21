import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import koylLogo from '../../images/koyl_logs.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorRegisterForm = () => {
    const { registerDoctor } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        practice: '',
        location: '',
        doctor_type: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setValidationErrors({ ...validationErrors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Basic form validation
        const errors = {};
        if (!formData.first_name.trim()) {
            errors.first_name = 'First name is required';
        }
        if (!formData.last_name.trim()) {
            errors.last_name = 'Last name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        }
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }
        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.location.trim()) {
            errors.location = 'Location is required';
        }
        if (!formData.practice.trim()) {
            errors.practice = 'Practice is required';
        }
        if (!formData.doctor_type.trim()) {
            errors.doctor_type = 'Doctor type is required';
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        try {
            const response = await registerDoctor(formData);
            setError('');
            // console.log('Response is here'+response);
            // toast.success('Doctor account registered successfully. An administrator will review and approve your account shortly. You will receive an email notification once your account is approved.');

            // history.push('/login'); 
        } catch (err) {
            // setError(err.message);
            toast.error(error.message || err.message);
        }
    };

    return (
        <div className='form_wrapper'>
                        <ToastContainer />

            <div className='form_header'>
                <img src={koylLogo} className='Form_logo' alt="Logo" />
                <h2>Let’s create an account</h2>
            </div>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className='form_inner'>
                    <div className='form_row'>
                        <div className='form_col W_50'>
                            <div className='form_group'>
                                <label>First Name</label>
                                <input
                                    type="text"
                                    className={`form_control ${validationErrors.first_name && 'is-invalid'}`}
                                    name="first_name"
                                    placeholder="Enter your first name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                />
                                {validationErrors.first_name && <span className="invalid-feedback">{validationErrors.first_name}</span>}
                            </div>
                        </div>
                        <div className='form_col W_50'>
                            <div className='form_group'>
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    className={`form_control ${validationErrors.last_name && 'is-invalid'}`}
                                    name="last_name"
                                    placeholder="Enter your last name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                />
                                {validationErrors.last_name && <span className="invalid-feedback">{validationErrors.last_name}</span>}
                            </div>
                        </div>
                        <div className='form_col W_50'>
                            <div className='form_group'>
                                <label>Location</label>
                                <input
                                    type="text"
                                    className={`form_control ${validationErrors.location && 'is-invalid'}`}
                                    name="location"
                                    placeholder="Enter your location"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                                {validationErrors.location && <span className="invalid-feedback">{validationErrors.location}</span>}
                            </div> 
                        </div>
                        <div className='form_col W_50'>
                            <div className='form_group'>
                                <label>Practice/Office you may work at</label>
                                <input
                                    type="text"
                                    className={`form_control ${validationErrors.practice && 'is-invalid'}`}
                                    name="practice"
                                    placeholder="Enter your practice office"
                                    value={formData.practice}
                                    onChange={handleChange}
                                />
                                {validationErrors.practice && <span className="invalid-feedback">{validationErrors.practice}</span>}
                            </div>
                        </div>
                        <div className='form_col W_50'>
                            <div className='form_group'>
                                <label>Practice/Office you may work at</label>
                                <input
                                    type="text"
                                    className={`form_control ${validationErrors.practice && 'is-invalid'}`}
                                    name="practice"
                                    placeholder="Enter your practice office"
                                    value={formData.practice}
                                    onChange={handleChange}
                                />
                                {validationErrors.practice && <span className="invalid-feedback">{validationErrors.practice}</span>}
                            </div> 
                        </div>
                        <div className='form_col W_50'>
                            <div className='form_group'>
                                <label>Type of Doctor or Practice</label>
                                <input
                                    type="text"
                                    className={`form_control ${validationErrors.doctor_type && 'is-invalid'}`}
                                    name="doctor_type"
                                    placeholder="Enter your type"
                                    value={formData.doctor_type}
                                    onChange={handleChange}
                                />
                                {validationErrors.doctor_type && <span className="invalid-feedback">{validationErrors.doctor_type}</span>}
                            </div> 
                        </div>
                        <div className='form_col W_100'>
                            <div className='form_group'>
                                <label>Email</label>
                                <input
                                    className={`form_control ${validationErrors.email && 'is-invalid'}`}
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {validationErrors.email && <span className="invalid-feedback">{validationErrors.email}</span>}
                            </div>
                        </div>
                        <div className='form_col W_100'>
                            <div className='form_group'>
                                <label>Password</label>
                                <input
                                    className={`form_control ${validationErrors.password && 'is-invalid'}`}
                                    type="password"
                                    placeholder='Enter your password'
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {validationErrors.password && <span className="invalid-feedback">{validationErrors.password}</span>}
                            </div>
                        </div>
                        <div className='form_col W_100'>
                            <div className='form_group'>
                                <label>Re-enter Password</label>
                                <input
                                    className={`form_control ${validationErrors.confirmPassword && 'is-invalid'}`}
                                    type="password"
                                    placeholder='Re-enter your password'
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                {validationErrors.confirmPassword && <span className="invalid-feedback">{validationErrors.confirmPassword}</span>}
                            </div>
                        </div>
                        <div className='form_col W_100'>
                            <div className='form_button_group'>
                                <button type="submit" className="cta cta_sky">Sign Up</button>
                            </div>
                        </div>
                    </div>   
                </div>
            </form>
        </div>
    );
};

export default DoctorRegisterForm;
