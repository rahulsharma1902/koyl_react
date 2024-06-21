import React , {createContext, useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null);
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (userData) => {
        console.warn(userData);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = async () => {
        // try {
        //     // If you have an API call to logout, make it here
        //     await axios.post('http://127.0.0.1:8000/api/logout');
        // } catch (error) {
        //     console.error('Logout API call failed:', error);
        // }

        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };


    const registerPatient = async (patientData) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register-patient', patientData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const userData = response.data;
            toast.success(response.data.message);
            login(userData);
        } catch (error) {
            console.log(error);
            throw new Error(error.response?.data?.message || 'Registration failed');
        }
    }



    const registerDoctor = async (doctorData) => {
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/register-doctor', doctorData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const userData = response.data;
            // login(userData);
            console.log('Response'+response);
            toast.success(response.data.message);

            console.log(response.data.message);
            console.warn('Register Doctor :'+userData);

        } catch (error){
            console.log(error);
            throw new Error(error.response?.data?.message || 'Registration failed');
        }
    }
    
    return (
        <AuthContext.Provider value={{ user, login, logout ,registerPatient , registerDoctor}}>
            {children}
        </AuthContext.Provider>
    );
};