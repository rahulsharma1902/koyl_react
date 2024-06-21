import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import PatientLayout from './PatientLayout';

const PatientDashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <PatientLayout user={user}>
            <div className='dashboard_module'>
                <div className='dash_container'>
                <h1>Welcome to Patient's Dashboard, {user ? user.first_name : 'Guest'}</h1>
                </div>
            </div>
            
            
        </PatientLayout>
    )
}
export default PatientDashboard;