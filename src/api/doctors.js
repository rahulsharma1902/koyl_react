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

export const getRequestDoctors = async () => {
    try{
            
        const response = await axios.get('http://127.0.0.1:8000/api/request-doctors');
        // toast.success('Successfully fetched doctor list.');
        return response.data;

    } catch (error){

        // toast.error(error.response?.data?.message || 'Failed to fetch doctor list.');
        throw new Error(error.response?.data?.message || 'Failed to fetch doctor request.');

    }
}


export const approveDoctorRequest = async (approveUser) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/request-approve', approveUser, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to Approve Doctor');
    }
};



export const removeDoctorAccount = async (doctorRemove) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/remove-doctor',doctorRemove,{
            headers : {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        return response.data;
    } catch (error){
        throw new Error(error.response?.data?.message || 'Failed to remove Doctor');
    }
}