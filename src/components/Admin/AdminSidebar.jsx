import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () =>{
    const links = [
        { name: 'Dashboard', path: '/admin-dashboard' },
        { name: 'Doctors', path: '/admin-dashboard/doctors' },
        { name: 'Account', path: '/admin-dashboard/account' },
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

export default AdminSidebar;