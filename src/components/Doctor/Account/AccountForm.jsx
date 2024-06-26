import React, { useState, useEffect } from 'react';
import { doctorDetail } from '../../../api/doctors';

const AccountForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        location: '',
        practice: '',
        doctor_type: '',
        allergies: '',
    });

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctorDetails = async () => {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (!storedUser || !storedUser.id) {
                setError('User not found in local storage.');
                return;
            }

            try {
                const doctorData = await doctorDetail(storedUser.id);
                setFormData({
                    first_name: doctorData.first_name || '',
                    last_name: doctorData.last_name || '',
                    email: doctorData.email || '',
                    location: doctorData.doctor_meta?.location || '',
                    practice: doctorData.doctor_meta?.practice || '',
                    doctor_type: doctorData.doctor_meta?.doctor_type || '',
                    allergies: doctorData.allergies || '',
                });
            } catch (error) {
                console.error('Failed to fetch Doctor details:', error);
                setError('Failed to find the Doctor.');
            }
        };

        fetchDoctorDetails();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
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
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='form_col W_50'>
                    <div className="form_group">
                        <label>Last Name *</label>
                        <input
                            className='form_control'
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='form_col W_50'>
                    <div className="form_group">
                        <label>Email *</label>
                        <input
                            className='form_control'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='form_col W_50'>
                    <div className="form_group">
                        <label>Location *</label>
                        <input
                            className='form_control'
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='form_col W_50'>
                    <div className="form_group">
                        <label>Practice *</label>
                        <input
                            className='form_control'
                            type="text"
                            name="practice"
                            value={formData.practice}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className='form_col W_50'>
                    <div className="form_group">
                        <label>Doctor Type *</label>
                        <input
                            className='form_control'
                            type="text"
                            name="doctor_type"
                            value={formData.doctor_type}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </div>
            <button type="submit" className="update-profile-btn cta cta_sky">Update Profile</button>
            {error && <p className="error-message">{error}</p>}
        </form>
    );
};

export default AccountForm;
