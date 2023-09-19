import React from "react";
import SignUp from "../components/SignUp";
import SideBar from "../components/SideBar";

const SignUpPage = () => {

    return (
        <div className="h-screen bg-verde p-6 md:p-16">
            <div className="flex justify-center items-center mb-12">
                <div className="w-14 h-14 bg-gray-300 rounded-full mr-3 "></div>
                <p className="text-3xl font-medium">
                    <span className="text-white">Cuida</span>
                    <span className="text-mostaza">Can</span>
                </p>
            </div>
            <SignUp />
        </div>
    );
}

export default SignUpPage;

 