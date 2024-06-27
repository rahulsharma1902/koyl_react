import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getDoctors = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/doctors');


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


export const doctorDetail = async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/doctor-detail/${id}`, {
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


export const updateDoctorProfile = async (formData) => {
    try {
        const token =  localStorage.getItem('token');
        const response = await axios.post(`http://127.0.0.1:8000/api/update-doctor/`,formData, {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `${token}`,
            }
        });
        console.log(response);
        toast.success(response.data.message);
        localStorage.setItem('user', JSON.stringify(response.data.doctor));
        return response.data;
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message);
        toast.error(error.response?.data?.error);
        throw new Error(error.response?.data?.message || 'Failed to find the Doctor');
    }
}