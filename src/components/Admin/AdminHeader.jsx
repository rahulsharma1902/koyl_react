import React, { useState } from "react";
import { Link } from "react-router-dom";
import dashbordlogo from '../../images/logo_white.png';
import useravtar from '../../images/avatar.png';

const AdminHeader = ({ user }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <div className="dash_board_header">
            <div className="container-full">
                <div className="header_row">
                    <div className="logo_col">
                        <div className="Dashbaord_logo">
                            <img src={dashbordlogo} className='Dash_logo' alt="Logo" />
                        </div>
                    </div>
                    <div className="admin_info_col">
                        <div className="user-info" onClick={toggleDropdown}>
                            <div className="user_name">
                                Welcome, {user ? user.first_name : 'Guest'}
                            </div>
                            <div className="user_avtar">
                                <img src={useravtar} alt="avatar" />
                            </div>
                            <div className={`dropdown_menu ${dropdownOpen ? 'open' : ''}`}>
                                <div className="dropdown_triangle"></div>
                                <Link to="/my-account" className="dropdown_item">My Account</Link>
                                <Link to="/logout" className="dropdown_item logout">Log out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHeader;
