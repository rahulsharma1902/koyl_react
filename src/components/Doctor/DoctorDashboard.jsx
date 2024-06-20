import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import DoctorLayout from './DoctorLayout';

const DoctorDashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <DoctorLayout user={user}>
            <div className='dashboard_module'>
                <div className='dash_container'>
                <h1>Welcome to Doctor's Dashboard, {user ? user.first_name : 'Guest'}</h1>
                </div>
            </div>
            
            
        </DoctorLayout>
    )
}
export default DoctorDashboard;