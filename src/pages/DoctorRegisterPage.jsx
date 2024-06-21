import React from "react";
import DoctorRegisterForm from "../components/Auth/DoctorRegister";


const RegisterPage = () => {
    return(
        <div>
            <div className='Login_page'>
                <div className='login_wrapper'>
                    <div className='inner_wrapper'>
                        <DoctorRegisterForm/>
                    </div>
                </div>
            </div> 
        </div>
    );
};
export default RegisterPage;
