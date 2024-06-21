import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getDoctors = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/doctors');

        // toast.success('Successfully fetched doctor list.');

        return response.data;
    } catch (error) {
        // toast.error(error.response?.data?.message || 'Failed to fetch doctor list.');

        throw new Error(error.response?.data?.message || 'Failed to fetch doctor list.');
    }
};
