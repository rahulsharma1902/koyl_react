import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import AdminLayout from './AdminLayout';

const AdminDashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <AdminLayout user={user}>
            <h1>Welcome to Admin Dashboard, {user ? user.first_name : 'Guest'}</h1>
            
        </AdminLayout>
    )
}

export default AdminDashboard;