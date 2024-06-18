import axios from 'axios';
import { Navigate } from 'react-router-dom';

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
        // console.log(response.data);
        // return <Navigate to="/admin-dashboard" />
        return response.data;
    } catch (error) {
        console.log(error.response.data.message);
        throw new Error(error.response.data.message);
        // throw new Error('Invalid Credentials');
    }
};



