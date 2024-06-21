import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const login = async (email, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
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

        console.log(response);
        localStorage.setItem('token', response.data.token);

        // Return user data (excluding token)
        const { token, ...userData } = response.data;
        return userData;

        // return response.data;
    } catch (error) {
        toast.warning(error.response.data.error);
        throw new Error(error.response.data.message);
        // throw new Error('Invalid Credentials');
    }
};

export const registerPatient = async (patientData) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/register-patient', patientData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};

