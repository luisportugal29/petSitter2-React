
"use client"

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Menu } from "@mui/icons-material";
import { setShowSideBar } from "../../redux/features/ui-slice";

const NavBar = () => {

    const dispatch = useDispatch();

    const isAuth = useSelector(state => state.auth.value.isAuth);
    const user = useSelector(state => state.auth.value.user);
    const showSideBar = useSelector(state => state.ui.value.showSideBar);

    return (
        <div className="flex-grow bg-verde px-6">
            <div className="sticky top-0">
                <div className="flex p-4">
                    <button
                    onClick={() => dispatch(setShowSideBar(!showSideBar))}
                        className="text-2xl text-gray-600 mr-2 text-white"
                        aria-label="open drawer"
                    >
                        <Menu className="text-3xl"/>
                    </button>
                    <div className="flex items-center mx-6">
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                        <div className="text-xl font-semibold">
                            <span className="text-white">Cuida</span>
                            <span className="text-mostaza">Can</span>
                        </div>
                    </div>
                    { !isAuth ? (
                    <div className="text-white hidden sm:flex space-x-3 ml-auto items-center">
                        <button className="hover:underline">Iniciar Sesión</button>
                        <div className="w-px h-6 bg-gray-300"></div>
                        <button className="hover:underline">Regístrate</button>
                    </div>
                    ): (
                        <div className="text-white hidden sm:flex space-x-3 ml-auto flex item-center">
                            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                            <div className="flex flex-col">
                                <span className="font-bold text-base">{`${user.name} ${user.lastName}`}</span>
                                <span className="font-light text-xs text-white  ">{user.email}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;