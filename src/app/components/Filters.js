"use client"
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import PinDropIcon from '@mui/icons-material/PinDrop';

const FilterList = () => {

    const [name, setName] = useState('');
    const  [location, setLocation] = useState('');

    return (
        <div className="flex my-4">
            <div className="relative mr-16">
                <SearchIcon className="absolute top-3 left-3" />
                <input 
                className="w-80 h-12 bg-white border border-verde rounded rounded-2xl pl-14 focus:outline-none"
                placeholder="Buscar cuidador"
                value={name}
                onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="relative">
                <PinDropIcon className="absolute top-3 left-3"/>
                <PinDropIcon className="absolute top-3 right-3 text-gris"/>
                <input 
                className="w-80 h-12 bg-white border border-verde rounded rounded-2xl pl-14 focus:outline-none"
                placeholder="Ubicación, Ciudad, Estado"
                value={location}
                onChange={e => setLocation(e.target.value)}
                />
            </div>
        </div>
    );
};

export default FilterList;