import React, { useState } from 'react';

const AccountForm = ({ user }) => {
    const [formData, setFormData] = useState({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        age: user.age || '',
        weight: user.weight || '',
        race: user.race || '',
        allergies: user.allergies || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile updated:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="account-form">
            <div className='form_row'>
                <div className='form_col W_50'>
                    <div className="form_group">
                        <label>First Name *</label>
                        <input
                            className='form_control'
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='form_col  W_50'>
                    <div className="form_group">
                        <label>Last Name *</label>
                        <input
                            className='form_control'
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='form_col  W_50'>
                    <div className="form_group">
                        <label>Age *</label>
                        <input
                            className='form_control'
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='form_col  W_50'>
                    <div className="form_group">
                        <label>Weight (lbs) *</label>
                        <input
                            className='form_control'
                            type="number"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='form_col  W_50'>
                    <div className="form_group">
                        <label>Race *</label>
                        <select
                            className='form_control'
                            name="race"
                            value={formData.race}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select...</option>
                            <option value="White">White</option>
                            <option value="Black">Black</option>
                            <option value="Asian">Asian</option>
                            <option value="Hispanic">Hispanic</option>
                            <option value="Other">Other</option>
                        </select>
                    </div> 
                </div>
                <div className='form_col  W_50'>
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
            <button type="submit" className="update-profile-btn cta cta_sky">Update Profile</button>
        </form>
    );
};

export default AccountForm;
