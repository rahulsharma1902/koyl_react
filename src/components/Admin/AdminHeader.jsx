import React, { useState } from "react";
import { Link } from "react-router-dom";
import dashbordlogo from '../../images/logo_white.png';
import useravtar from '../../images/avatar.png';

const AdminHeader = ({ user, onToggleSidebar }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [buttonToggled, setButtonToggled] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleToggleClick = () => {
        setButtonToggled(!buttonToggled);
        onToggleSidebar();
    };

    return (
        <div className="dash_board_header">
            <div className="container-full">
                <div className="header_row">
                    <div className="logo_col">
                        <div className="Dashbaord_logo">
                            <img src={dashbordlogo} className='Dash_logo' alt="Logo" />
                        </div>
                        <div className="toggle_button">
                            <button 
                                className={`toggle_button_cta ${buttonToggled ? 'active' : ''}`} 
                                onClick={handleToggleClick}
                            >
                                <span className="bar bar1"></span>
                                <span className="bar bar2"></span>
                                <span className="bar bar3"></span>
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="admin_info_col">
                        <div className="user-info" onClick={toggleDropdown}>
                            <div className="user_name desktop_usename">
                                <span className="user_greet">Welcome, </span> {user ? user.first_name : 'Guest'}
                            </div>
                            <div className="user_avtar">
                                <img src={useravtar} alt="avatar" />
                            </div>
                            <div className={`dropdown_menu ${dropdownOpen ? 'open' : ''}`}>
                                <div className="dropdown_triangle"></div>
                                <div className="user_name mobile_username">
                                    <span className="user_greet">Welcome, </span> {user ? user.first_name : 'Guest'}
                                </div>
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
