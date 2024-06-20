import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children, roles }) => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    if (!user) {
        return <Navigate to="/login" />;
    }

    if (roles && !roles.includes(user.user_type)) {
        return <Navigate to="/login" />;
    }
    if (user.user_type === 'patient' && user.status === 1) {
        // return <Navigate to="/patient-dashboard" />;
    }


    return children;
};

export default PrivateRoute;
