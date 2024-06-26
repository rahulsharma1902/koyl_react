import axios from 'axios';
import { toast } from 'react-toastify'; 


export const getPatients = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/patients');
        console.log(response);
        return response.data;
    } catch (error) {

        toast.error(error.response?.data?.message || 'Failed to fetch doctor list.');
        throw new Error(error.response?.data?.message || 'Failed to fetch doctor list.');
    }
};

export const patientDetail = async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/patient-detail/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.warn(error);
        throw new Error(error.response?.data?.message || 'Failed to find the Doctor');
    }
}