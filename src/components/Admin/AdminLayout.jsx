import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ user, children }) => { 


    return (
        <div className="admin-layout dashboard_layout">
            <AdminHeader user={user} />
                <div className="admin-main dashboard_inner">
                    <AdminSidebar />
                    <div className="content dashboard_content">
                        {children}
                    </div>
                </div>
        </div>
    )
};
export default AdminLayout;