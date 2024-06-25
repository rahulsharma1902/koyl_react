
import React, { useState } from 'react';
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ user, children }) => { 

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="admin-layout dashboard_layout">
            <AdminHeader user={user} onToggleSidebar={toggleSidebar} />
                <div className="admin-main dashboard_inner">
                    <AdminSidebar  isSidebarOpen={isSidebarOpen} />
                    <div className={`content dashboard_content ${isSidebarOpen ? 'sidebar_open' : ''}`}>
                        {children}
                    </div>
                </div>
        </div>
    )
};
export default AdminLayout;