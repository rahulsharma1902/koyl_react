import React , {createContext, useState } from 'react';
import axios from 'axios';

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

    const logout = () => {
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
            login(userData);
        } catch (error) {
            console.log(error);
            throw new Error(error.response?.data?.message || 'Registration failed');
        }
    }

    
    return (
        <AuthContext.Provider value={{ user, login, logout ,registerPatient }}>
            {children}
        </AuthContext.Provider>
    );
};