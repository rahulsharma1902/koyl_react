import React from "react";
import { Link } from "react-router-dom";

const DoctorSidebar = () =>{
    const links = [
        { name: 'Dashboard', path: '/doctor-dashboard' },
        { name: 'Doctors', path: '/doctor-dashboard/patients' },
        { name: 'Account', path: '/doctor-dashboard/account' },
    ];

    return (
        <div className="sidebar">
           <div className="sidebar_inner">
            <ul className="sidebar_navigation">
                    {links.map((link,index) =>(
                        <li key={index}>
                            <Link to={link.path} className="navigation_link">{link.name}</Link>
                        </li>
                    ))}
                </ul>
           </div>
        </div>
    )
};

export default DoctorSidebar;