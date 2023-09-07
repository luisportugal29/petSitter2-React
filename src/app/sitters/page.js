import React from "react";
import NavBar from '../components/NavBar';
import SitterList from '../components/SitterList';
import SitterInfo from '../components/SitterInfo';
import SideBar from '../components/SideBar';

export const Sitters = () => {
    return (
        <div className="h-screen bg-crema">
            <SideBar />
            <NavBar />
            <div className="flex px-24">
                <div>
                    <SitterList />
                </div>
                <SitterInfo />
            </div>
        </div>
    );
};

export default Sitters;