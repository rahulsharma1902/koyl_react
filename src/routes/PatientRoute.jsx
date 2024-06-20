import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PatientDashboard from '../components/Patient/PatientDashboard';
import CompleteProfile from '../components/Patient/CompleteProfile';
const PatientRoutes = () => {
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

            <Route 
                path="/complete-profile" 
                element={
                    <PrivateRoute roles={['patient']}>
                        <CompleteProfile />
                    </PrivateRoute>
                } 
            />
           
        </Routes>
    );
};

export default PatientRoutes;
