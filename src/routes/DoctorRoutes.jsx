import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import DoctorDashboard from '../components/Doctor/DoctorDashboard';

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
           
        </Routes>
    );
};

export default DoctorRoutes;
