"use client"
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import { setShowSideBar } from "../../redux/features/ui-slice";
import Link from "next/link";

const SideBar = () => {

    const disptach = useDispatch();
    const showSideBar = useSelector(state => state.ui.value.showSideBar);
    const isAuth = useSelector(state => state.auth.value.isAuth);
    const componentRef = useRef(null);

    const [options, setOptions] = useState([
        {
            name: 'Mensajes',
            status: true,
            href: '/messages',
            icon: EmailIcon,
        },
        {
            name: 'Cuidadores',
            status: true,
            href: '/sitters',
            icon: GroupsIcon,
        },
        {
            name: 'Agendados',
            status: true,
            href: '/booked',
            icon: CalendarMonthIcon,
        },
        {
            name: 'Regístrate',
            status: false,
            href: '/signup',
            icon: PersonAddAlt1Icon,
        },
        {
            name: 'Iniciar sesión',
            status: false,
            href: '/signin',
            icon: LoginIcon,
        }
    ]);

    const handleExternalClick = (event) => {
        if ( componentRef.current && !componentRef.current.contains(event.target) )
            disptach(setShowSideBar(false));
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleExternalClick);

        return () => document.removeEventListener('mousedown', handleExternalClick);
    },[]);

   return (
        <>
        {showSideBar && (
            <div 
            ref={componentRef}
            className="fixed flex flex-col w-80 top-0 bottom-0 left-0 bg-white z-30">
                <div className="h-36 flex bg-crema justify-center items-center pt-10">
                {isAuth ? (
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
                { options.map((option, index) => ( option.status === isAuth ? (
                    <Link
                     key={index}
                     href={option.href}
                     className="w-52 h-16 relative my-4">
                        <option.icon 
                        className="text-4xl text-verde absolute top-3 left-2" 
                        />
                        <button className="w-full h-full text-verde">
                            { option.name }
                        </button>
                    </Link>
                    ): null
                ))}
            </div>
            <div className="h-36 border-t border-gris mx-4 flex justify-center">
                {isAuth ? (
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
        )}
        </>
   );
};

export default SideBar;