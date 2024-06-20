import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AdminDashboard from '../components/Admin/AdminDashboard';
import AdminDoctors from '../components/Admin/Doctor/DoctorList';
import AccountDetail from '../components/Admin/Account/AccountDetail';
import DoctorRequest from '../components/Admin/Doctor/DoctorRequest';
const AdminRoutes = () => {
    return (
        <Routes>
            <Route 
                path="/admin-dashboard" 
                element={
                    <PrivateRoute roles={['admin']}>
                        <AdminDashboard />
                    </PrivateRoute>
                } 
            />
            <Route 
                path="/admin-dashboard/doctors" 
                element={
                    <PrivateRoute roles={['admin']}>
                        <AdminDoctors />
                    </PrivateRoute>
                } 
            />
             <Route 
                path="/admin-dashboard/doctors-request" 
                element={
                    <PrivateRoute roles={['admin']}>
                        <DoctorRequest />
                    </PrivateRoute>
                } 
            />
            <Route 
                path="/admin-dashboard/account" 
                element={
                    <PrivateRoute roles={['admin']}>
                        <AccountDetail />
                    </PrivateRoute>
                } 
            />
        </Routes>
    );
};

export default AdminRoutes;
