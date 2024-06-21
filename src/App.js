import React from 'react';
import './css/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import AdminRoutes from './routes/AdminRoutes';
import DoctorRoutes from './routes/DoctorRoutes';
import RegisterPage from './pages/RegisterPage';
import DoctorRegisterPage from './pages/DoctorRegisterPage';
import PatientRoutes from './routes/PatientRoute';
import CompleteProfile from './components/Patient/CompleteProfile';
const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin-dashboard/*" element={<AdminRoutes />} />
                    <Route path="/doctor-dashboard/*" element={<DoctorRoutes />} />
                    <Route path="/patient-dashboard/*" element={<PatientRoutes />} />
                    <Route path="/Register" element={<RegisterPage />} />
                    <Route path="/complete-profile" element={<CompleteProfile />} />
                    <Route path="/doctor-register" element={<DoctorRegisterPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
