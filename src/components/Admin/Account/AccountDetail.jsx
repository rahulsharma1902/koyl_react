import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import AdminLayout from '../AdminLayout';


const AccountDetail = () => {
    const {user} = useContext(AuthContext);
    return (
        <AdminLayout user={user}>
            <div>
                Account details
            </div>
        </AdminLayout>
    )
};

export default AccountDetail;