"use client"
import React, { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';

const SideBar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [options, setOptions] = useState([
        {
            name: 'Mensajes',
            status: true,
            icon: EmailIcon,
        },
        {
            name: 'Cuidadores',
            status: true,
            icon: GroupsIcon,
        },
        {
            name: 'Agendados',
            status: true,
            icon: CalendarMonthIcon,
        },
        {
            name: 'Regístrate',
            status: false,
            icon: PersonAddAlt1Icon,
        },
        {
            name: 'Iniciar sesión',
            status: false,
            icon: LoginIcon,
        }
    ]);

   return (
        <div className="fixed flex flex-col w-80 top-0 bottom-0 bg-white z-30">
            <div className="h-36 flex bg-crema justify-center items-center pt-10">
                {isLoggedIn ? (
                    <>
                        <div className="flex">
                            <div className="h-12 w-12 bg-gris rounded-full border-2 border-verde"></div>
                        </div>
                        <div  className="ml-4">
                            <p className="text-lg text-verde font-bold">Scarlette López</p>
                            <p className="text-sm ">Scarlette@gmail.com</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                        <div className="text-xl font-semibold">
                            <span className="text-verde">Cuida</span>
                            <span className="text-mostaza">Can</span>
                        </div>
                    </>
                )} 
            </div>
            <div className="grow flex flex-col items-center pt-8">
                { options.map((option, index) => ( option.status === isLoggedIn ? (
                    <div 
                     key={index}
                     className="w-52 h-16 relative my-4">
                        <option.icon 
                        className="text-4xl text-verde absolute top-3 left-2" 
                        />
                        <button className="w-full h-full text-verde">
                            { option.name }
                        </button>
                    </div>
                    ): null
                ))}
            </div>
            <div className="h-36 border-t border-gris mx-4 flex justify-center">
                {isLoggedIn ? (
                     <div className="w-52 h-16 relative my-4">
                        <LogoutIcon className="text-4xl text-verde absolute top-3 left-2" />
                        <button className="w-full h-full text-verde">
                            Cerrar sesión
                        </button>
                    </div>
                ) : (
                   <div className="flex gap-x-4 items-center">
                        <div className="w-36 h-12 relative my-4 bg-verde rounded-lg">
                            <AppleIcon className="text-3xl text-white absolute top-2 left-2" />
                            <button className="w-full h-full">
                                <span className="text-white font-bold ml-4">App Store</span>
                            </button>
                        </div>
                        <div className="w-36 h-12 relative my-4 bg-verde rounded-lg p-2">
                            <ShopIcon className="text-3xl text-white absolute top-2 left-2" />
                            <button className="w-full h-full">
                                <span className="ml-6 text-white font-bold">Google Play</span>
                            </button>
                        </div>
                   </div>
                )}
            </div>
        </div>
   );
};

export default SideBar;