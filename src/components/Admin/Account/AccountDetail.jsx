import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import AdminLayout from '../AdminLayout';
import AccountForm from './AccountForm';

const AccountDetail = () => {
    const { user } = useContext(AuthContext);

    return (
        <AdminLayout user={user}>
            <div className="dashboard_module recommendations-module">
                <div className='dash_container'>
                    <div className='module_header'>
                        <h2>My Account</h2>
                    </div>
                    <AccountForm user={user} />
                </div>
            </div>
        </AdminLayout>
    );
};

export default AccountDetail;
