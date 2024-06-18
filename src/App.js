import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import AdminRoutes from './routes/AdminRoutes';


const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/*" element={<AdminRoutes />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
