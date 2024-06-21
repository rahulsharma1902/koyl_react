import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        const performLogout = async () => {
            try {
                // Clear user data and perform any API logout logic if necessary
                await logout();
            } catch (err) {
                console.error('Failed to logout:', err);
            }
        };

        performLogout();
    }, [logout]);

    // After performing logout logic, redirect to the login page using Navigate
    return <Navigate to="/login" />;

    // Alternatively, you can render a loading or logging out message before redirection
    // return (
    //     <div className="container">
    //         <h1>Logging Out...</h1>
    //         <Navigate to="/login" />
    //     </div>
    // );
};

export default Logout;
