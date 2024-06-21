import React, { useState, useContext , useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { login } from '../../api/auth';
import koylLogo from '../../images/koyl_logs.png';
import { getDoctors } from '../../api/doctors';

const PatientRegisterForm = () => {
    const [doctors, setDoctors] = useState([]);
    const [location, setLocations] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const doctorsList = await getDoctors();
                console.log(doctorsList);
                setDoctors(doctorsList);
            } catch (error) {
                console.error('Failed to fetch doctors:', error.message);
            }
        };

        fetchDoctors();
    }, []);

    const { registerPatient } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
        doctor_id: ''
    });

    const [error, setError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear validation error if user starts typing again
        setValidationErrors({ ...validationErrors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Basic form validation
        const errors = {};
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
        if (!formData.doctor_id) {
            errors.doctor_id = 'Please select a doctor';
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        try {
            await registerPatient(formData);
            setError('');
            // history.push('/login');
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
                                type="text"
                                className={`form_control ${validationErrors.location && 'is-invalid'}`}
                                name="location"
                                placeholder="Enter your Location"
                                value={formData.location}
                                onChange={handleChange}
                                
                            />
                            <ul>
                                {doctors.map(element => (
                                        <li key={element.id} value={element.id}>{element.doctor_meta.location}</li>
                                ))}
                            </ul>
                            {validationErrors.location && <span className="invalid-feedback">{validationErrors.location}</span>}
                        </div>
                        <div className='form_group'>
                            <label>Your Doctor</label>
                            <select
                                className={`form_control ${validationErrors.doctor_id && 'is-invalid'}`}
                                name="doctor_id"
                                value={formData.doctor_id}
                                onChange={handleChange}
                            >
                                <option value="">Select Doctor</option>
                                {doctors.map(element => (
                                    <option key={element.id} value={element.id}>{element.first_name}</option>
                                ))}
                            </select>
                            {validationErrors.doctor_id && <span className="invalid-feedback">{validationErrors.doctor_id}</span>}
                        </div>

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
                        <div className='form_group'>
                            <label>Password</label>
                            <input
                                className={`form_control ${validationErrors.password && 'is-invalid'}`}
                                type="password"
                                placeholder='Password'
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {validationErrors.password && <span className="invalid-feedback">{validationErrors.password}</span>}
                        </div>
                        <div className='form_group'>
                            <label>Re-enter Password</label>
                            <input
                                className={`form_control ${validationErrors.confirmPassword && 'is-invalid'}`}
                                type="password"
                                placeholder='Re-enter Password'
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {validationErrors.confirmPassword && <span className="invalid-feedback">{validationErrors.confirmPassword}</span>}
                        </div>
                        <div className='form_button_group'>
                            <button type="submit" className="cta cta_sky">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PatientRegisterForm;
