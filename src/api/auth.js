// api.js
import apiClient from './apiClient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const login = async (email, password) => {
    try {
        const response = await apiClient.post('/login', { email, password });
        localStorage.setItem('token', response.data.token);
        const { token, ...userData } = response.data;
        return userData;

        // const data = {
        //     id: 1,
        //     first_name: "John",
        //     last_name: "Doe",
        //     email: email,
        //     // user_type: email === "admin@gmail.com" ? "admin" : "doctor",
        //     user_type: 'admin',
        //     token: "static-jwt-token"
        // };
        // return data;

    } catch (error) {
        toast.warning(error.response?.data?.error || 'Invalid Credentials');
        throw new Error(error.response?.data?.message || 'Invalid Credentials');
    }
};

export const registerPatient = async (patientData) => {
    try {
        const response = await apiClient.post('/register-patient', patientData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};

export const completeProfile = async (profileData) => {
    try {
        const token = localStorage.getItem('token');
        console.warn(token);
        const headers = {
            'Authorization': `Bearer ${token}`,
        };
        const response = await apiClient.post('/complete-profile', profileData, { headers });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response?.data?.message || 'Failed to complete profile');
    }
};
