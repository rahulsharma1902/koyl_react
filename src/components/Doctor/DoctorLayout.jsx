import React from "react";
import DoctorHeader from "./DoctorHeader";
import DoctorSidebar from "./DoctorSidebar";

const DoctorLayout = ({ user, children }) => { 


    return (
        <div className="admin-layout dashboard_layout">
            <DoctorHeader user={user} />
                <div className="admin-main dashboard_inner">
                    <DoctorSidebar />
                    <div className="content dashboard_content">
                        {children}
                    </div>
                </div>
        </div>
    )
};
export default DoctorLayout;