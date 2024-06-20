import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AdminSidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const links = [
    { name: 'Dashboard', path: '/admin-dashboard', submenu: [] },
    { 
      name: 'Doctors', 
      path: '/admin-dashboard/doctors', 
      submenu: [
        { name: `Doctor's list`, path: '/admin-dashboard/doctors' },
        { name: `Doctor's request`, path: '/admin-dashboard/doctors-request' }
      ]
    },
    { name: 'Account', path: '/admin-dashboard/account', submenu: [] },
  ];
  const handleMenuClick = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };
  return (
    <div className="sidebar">
      <div className="sidebar_inner">
        <ul className="sidebar_navigation">
          {links.map((link, index) => (
            <li className={`nav_item ${openMenu === index ? 'active_open' : ''}`} key={index}>
              {link.submenu.length > 0 ? (
                <div onClick={() => handleMenuClick(index)} className="navigation_link">
                  <span className="link_name">{link.name}</span>
                  <i className={`fas fa-chevron-${openMenu === index ? 'down' : 'right'} arrow_icon`}></i>
                </div>
              ) : (
                <Link to={link.path} className="navigation_link">
                  <span className="link_name">{link.name}</span>
                </Link>
              )}
              {link.submenu.length > 0 && (
                <ul className={`submenu ${openMenu === index ? 'open_menu' : ''}`}>
                  {link.submenu.map((sublink, subindex) => (
                    <li className="nav_item" key={subindex}>
                      <Link to={sublink.path} className="navigation_link">{sublink.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
