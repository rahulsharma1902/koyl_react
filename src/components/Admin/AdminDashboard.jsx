import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const AdminDashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <div>
                <h1>Welcome to {user ? user.email : "Invalid Access"} Dashboard</h1>
            </div>
        </div>
    )
}

export default AdminDashboard;