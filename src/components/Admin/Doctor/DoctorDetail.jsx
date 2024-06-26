import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import AdminLayout from '../AdminLayout';

const DoctorDetail = () => {
    const { user } = useContext(AuthContext);

    const [doctorDetails, setDoctorDetails] = useState({
        name: 'Jane Doe',
        workplace: 'Piedmont Gastroentrology',
        email: 'email@email.com',
        signupDate: '12/21/22'
    });

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
                                        <b>Doctor at:</b> {doctorDetails.workplace}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Email:</b> {doctorDetails.email}
                                    </div>
                                    <div className='detail_div'>
                                        <b>Sign up date:</b> {doctorDetails.signupDate}
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
