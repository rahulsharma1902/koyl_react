import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AdminDashboard from '../components/Admin/AdminDashboard';
import AdminDoctors from '../components/Admin/Doctor/DoctorList';
import AccountDetail from '../components/Admin/Account/AccountDetail';

const AdminRoutes = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <PrivateRoute roles={['admin']}>
                        <AdminDashboard />
                    </PrivateRoute>
                } 
            />
            <Route 
                path="/doctors" 
                element={
                    <PrivateRoute roles={['admin']}>
                        <AdminDoctors />
                    </PrivateRoute>
                } 
            />
            <Route 
                path="/account" 
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
