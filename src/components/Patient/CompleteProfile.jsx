import React, { useState } from 'react';
import { completeProfile } from '../../api/auth';
import { Navigate } from 'react-router-dom';

const CompleteProfile = ({ user }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        age: '',
        weight: '',
        race: '',
        allergies: '',
    });

    const [validationErrors, setValidationErrors] = useState({});
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setValidationErrors({ ...validationErrors, [name]: '' });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.first_name.trim()) {
            errors.first_name = 'First name is required';
        }
        if (!formData.last_name.trim()) {
            errors.last_name = 'Last name is required';
        }
        if (!formData.age.trim()) {
            errors.age = 'Age is required';
        } else if (isNaN(formData.age) || formData.age <= 0) {
            errors.age = 'Age must be a positive number';
        }
        if (!formData.weight.trim()) {
            errors.weight = 'Weight is required';
        } else if (isNaN(formData.weight) || formData.weight <= 0) {
            errors.weight = 'Weight must be a positive number';
        }
        if (!formData.race.trim()) {
            errors.race = 'Race is required';
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        try {
            await completeProfile(formData);
            setRedirect(true);
        } catch (error) {
            setError(error.message);
        }
    };

    if (redirect) {
        // return <Navigate to="/profile" />;
    }

    return (
        <div className='complete_profile_outer'>
            <div className='container'>
               <div className='complete_profile_wrap'>
                <div className='form_header'>
                    <h2>One Last Step...</h2>
                </div>
                <form onSubmit={handleSubmit} className="account-form">
                        <div className='form_row'>
                            <div className='form_col W_50'>
                                <div className="form_group">
                                    <label>First Name *</label>
                                    <input
                                        className={`form_control ${validationErrors.first_name && 'is-invalid'}`}
                                        type="text"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                    />
                                    {validationErrors.first_name && <span className="invalid-feedback">{validationErrors.first_name}</span>}
                                </div>
                            </div>
                            <div className='form_col W_50'>
                                <div className="form_group">
                                    <label>Last Name *</label>
                                    <input
                                        className={`form_control ${validationErrors.last_name && 'is-invalid'}`}
                                        type="text"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                    />
                                    {validationErrors.last_name && <span className="invalid-feedback">{validationErrors.last_name}</span>}
                                </div>
                            </div>
                            <div className='form_col W_50'>
                                <div className="form_group">
                                    <label>Age *</label>
                                    <input
                                        className={`form_control ${validationErrors.age && 'is-invalid'}`}
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                    />
                                    {validationErrors.age && <span className="invalid-feedback">{validationErrors.age}</span>}
                                </div>
                            </div>
                            <div className='form_col W_50'>
                                <div className="form_group">
                                    <label>Weight (lbs) *</label>
                                    <input
                                        className={`form_control ${validationErrors.weight && 'is-invalid'}`}
                                        type="number"
                                        name="weight"
                                        value={formData.weight}
                                        onChange={handleChange}
                                    />
                                    {validationErrors.weight && <span className="invalid-feedback">{validationErrors.weight}</span>}
                                </div>
                            </div>
                            <div className='form_col W_50'>
                                <div className="form_group">
                                    <label>Race *</label>
                                    <select
                                        className={`form_control ${validationErrors.race && 'is-invalid'}`}
                                        name="race"
                                        value={formData.race}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select...</option>
                                        <option value="White">White</option>
                                        <option value="Black">Black</option>
                                        <option value="Asian">Asian</option>
                                        <option value="Hispanic">Hispanic</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {validationErrors.race && <span className="invalid-feedback">{validationErrors.race}</span>}
                                </div>
                            </div>
                            <div className='form_col W_50'>
                                <div className="form_group">
                                    <label>Please list any known food or drug allergies</label>
                                    <input
                                        className='form_control'
                                        type="text"
                                        name="allergies"
                                        value={formData.allergies}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="update-profile-btn cta cta_sky">Complete Profile</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
               </div>
            </div>
        </div>
    );
};

export default CompleteProfile;
