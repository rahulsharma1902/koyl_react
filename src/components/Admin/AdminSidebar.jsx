import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () =>{
    const links = [
        { name: 'Dashboard', path: '/admin-dashboard' },
        { name: 'Doctors', path: '/admin-dashboard/doctors' },
        { name: 'Account', path: '/admin-dashboard/account' },
    ];

    return (
        <div className="">
            <ul>
                {links.map((link,index) =>(
                    <li key={index}>
                        <Link to={link.path} >{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default AdminSidebar;