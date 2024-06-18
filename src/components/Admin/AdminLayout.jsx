import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ user, children }) => { 


    return (
        <div className="admin-layout">
            <AdminHeader user={user} />
                <div className="admin-main">
                    <AdminSidebar />
                        <div className="content">
                            {children}
                        </div>
                </div>
        </div>
    )
};
export default AdminLayout;