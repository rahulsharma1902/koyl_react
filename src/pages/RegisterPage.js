import React from "react";
import RegisterForm from "../components/Auth/RegisterForm";

const RegisterPage = () => {
    return(
        <div>
            <div className='Login_page'>
                <div className='login_wrapper'>
                    <div className='inner_wrapper'>
                        <RegisterForm/>
                    </div>
                </div>
            </div> 
        </div>
    );
};
export default RegisterPage;
