import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import DoctorDashboard from '../components/Doctor/DoctorDashboard';
import PatientList from '../components/Doctor/Patient/PatientList';
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
           
        </Routes>
    );
};

export default DoctorRoutes;
