import React from 'react';
import {Route,Routes} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AdminDashboard from '../components/Admin/AdminDashboard';

const AdminRoutes = () =>{
    return (
        <Routes>
            <Route path='/admin-dashboard' 
            element={
                <PrivateRoute roles={['admin']} >
                        <AdminDashboard />
                </PrivateRoute>
            } 
            />
        </Routes>
    )
}
export default AdminRoutes;
