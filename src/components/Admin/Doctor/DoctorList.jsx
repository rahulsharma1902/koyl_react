import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import AdminLayout from '../AdminLayout';


const AdminDoctors = () => {
    const {user} = useContext(AuthContext);
    return (
        <AdminLayout user={user}>
            <div>
                Doctor List
            </div>
        </AdminLayout>
    )
};

export default AdminDoctors;