import React from "react";
import { Link } from "react-router-dom";

const PatientSidebar = () =>{
    const links = [
        { name: 'Dashboard', path: '/patient-dashboard' },
        { name: 'Account', path: '/patient-dashboard/account' },
        { name: 'Doctors', path: '/patient-dashboard/patients' },
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

export default PatientSidebar;