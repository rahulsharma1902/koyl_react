import React from "react";
const AdminHeader = ({ user}) => {
    return (
        <div className="header">
            <h1>Koyl</h1>
            <div className="user-info">
                Welcome, {user ? user.first_name : 'Guest'}
            </div>
        </div>
    )
};
export default AdminHeader;