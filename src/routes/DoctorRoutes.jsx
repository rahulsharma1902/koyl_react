import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import DoctorDashboard from '../components/Doctor/DoctorDashboard';
import PatientList from '../components/Doctor/Patient/PatientList';
import PatientDetail from '../components/Doctor/Patient/PatientDetail';
import AccountDetail from '../components/Doctor/Account/AccountDetail'
const DoctorRoutes = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <PrivateRoute roles={['doctor']}>
                        <DoctorDashboard />
                    </PrivateRoute>
                } 
            />
            <Route 
                path="/patients" 
                element={
                    <PrivateRoute roles={['doctor']}>
                        <PatientList />
                    </PrivateRoute>
                } 
            />
            <Route 
                path="/patient-detail/:id" 
                element={
                    <PrivateRoute roles={['doctor']}>
                        <PatientDetail />
                    </PrivateRoute>
                } 
            />
             <Route 
                path="/account" 
                element={
                    <PrivateRoute roles={['doctor']}>
                        <AccountDetail />
                    </PrivateRoute>
                } 
            />
           
        </Routes>
    );
};

export default DoctorRoutes;
