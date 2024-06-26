import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import AdminLayout from '../AdminLayout';
import { doctorDetail } from '../../../api/doctors';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

const DoctorDetail = () => {
    const { user } = useContext(AuthContext);
    const [doctorDetails, setDoctorDetails] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                const doctorData = await doctorDetail(id);
                setDoctorDetails(doctorData);
            } catch (error) {
                console.error('Failed to fetch doctor details:', error.message);
                setError('Failed to find the doctor.');
            }
        };

        fetchDoctorDetails();
    }, [id]);

    const formatDateTime = (isoDate) => {
        const date = new Date(isoDate);
        return `${format(date, 'yyyy-MM-dd')}    ${format(date, 'HH:mm:ss')}`;
    };

    if (error) {
        return (
            <AdminLayout user={user}>
                <div>
                    <p>{error}</p>
                </div>
            </AdminLayout>
        );
    }

    if (!doctorDetails) {
        return (
            <AdminLayout user={user}>
                <div>
                    {/* You can add a loader here while data is not loaded */}
                </div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout user={user}>
            <div>
                <div className="dashboard_module recommendations-module">
                    <div className='dash_container'>
                        <div className='module_header'>
                            <h2>{doctorDetails.name}</h2>
                        </div>
                        <div className='detail_row'>
                            <div className='detail_col'>
                                <h2>Doctor Details</h2>
                                <div className='detail_div_wrap'>
                                    <div className='detail_div'>
                                        <b>First Name:</b> {doctorDetails.first_name}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Last Name:</b> {doctorDetails.last_name}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Doctor at:</b> {doctorDetails.doctor_meta.location}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Practice:</b> {doctorDetails.doctor_meta.practice}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Doctor Type:</b> {doctorDetails.doctor_meta.doctor_type}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Email:</b> {doctorDetails.email}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Sign up date:</b> {formatDateTime(doctorDetails.created_at)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default DoctorDetail;
