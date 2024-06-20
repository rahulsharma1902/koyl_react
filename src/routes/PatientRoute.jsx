import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PatientDashboard from '../components/Patient/PatientDashboard';

const DoctorRoutes = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <PrivateRoute roles={['patient']}>
                        <PatientDashboard />
                    </PrivateRoute>
                } 
            />
           
        </Routes>
    );
};

export default DoctorRoutes;
