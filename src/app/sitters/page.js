import React from "react";
import axios from 'axios';
import NavBar from '../components/NavBar';
import SitterList from '../components/SitterList';
import SitterInfo from '../components/SitterInfo';
import SideBar from '../components/SideBar';

export const Sitters = async () => {

    const  { data : sitters } = await axios.get('http://127.0.0.1:3200/api/sitters/findAll');
    const { data: users } = await axios.get('http://127.0.0.1:3200/api/ratings/lastcomments');

    return (
        <div className="h-screen bg-crema">
            
            <NavBar />
            <div className="flex flex-col md:flex-row md:px-24">
                <div>
                    <SitterList sitters={sitters} />
                </div>
                <SitterInfo users={users} />
            </div>
        </div>
    );
};

export default Sitters;