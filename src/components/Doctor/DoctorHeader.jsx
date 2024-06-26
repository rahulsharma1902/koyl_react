import React from "react";
import dashbordlogo from '../../images/logo_white.png';
import useravtar from '../../images/avatar.png';
const DoctorHeader = ({ user}) => {
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
                        <div className="user-info">
                            <div className="user_name">
                                 Welcome, {user ? user.first_name : 'Guest'}
                            </div>
                            <div className="user_avtar">
                                <img src={useravtar}  alt="avtar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
   
    )
};
export default DoctorHeader;