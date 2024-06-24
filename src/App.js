import React from 'react';
import './css/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import Logout from '../src/components/Auth/Logout';
import AdminRoutes from './routes/AdminRoutes';
import DoctorRoutes from './routes/DoctorRoutes';
import RegisterPage from './pages/RegisterPage';
import DoctorRegisterPage from './pages/DoctorRegisterPage';
import PatientRoutes from './routes/PatientRoute';
import CompleteProfile from './components/Patient/CompleteProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/admin-dashboard/*" element={<AdminRoutes />} />
                    <Route path="/doctor-dashboard/*" element={<DoctorRoutes />} />
                    <Route path="/patient-dashboard/*" element={<PatientRoutes />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/complete-profile" element={<CompleteProfile />} />
                    <Route path="/doctor-register" element={<DoctorRegisterPage />} />
                </Routes>
            </Router>
            <ToastContainer />

        </AuthProvider>
    );
};

export default App;
