import React from 'react';
import './css/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import AdminRoutes from './routes/AdminRoutes';
import RegisterPage from './pages/RegisterPage';


const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/*" element={<AdminRoutes />} />
                    <Route path="/Register" element={<RegisterPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
