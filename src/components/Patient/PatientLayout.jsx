import React from "react";
import PatientHeader from "./PatientHeader";
import PatientSidebar from "./PatientSidebar";

const PatientLayout = ({ user, children }) => { 


    return (
        <div className="admin-layout dashboard_layout">
            <PatientHeader user={user} />
                <div className="admin-main dashboard_inner">
                    <PatientSidebar />
                    <div className="content dashboard_content">
                        {children}
                    </div>
                </div>
        </div>
    )
};
export default PatientLayout;