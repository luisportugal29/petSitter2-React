"use client"
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import PinDropIcon from '@mui/icons-material/PinDrop';
import { fetchSitters, filterSitters } from "../../redux/features/sitters-slice";

const FilterList = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [typingTimeOut, setTypingTimeOut] = useState(null);

    useEffect(() => {
       
        clearTimeout(typingTimeOut);

        if (!name && !location) {
            dispatch(fetchSitters())
            return;
        }

        setTypingTimeOut( setTimeout( () => {
            const queryParams = {
                ...(name && { name }),
                ...(location && { city: location })
            };
            
            if ( Object.keys(queryParams).length )  
                dispatch(filterSitters(queryParams));
            
        }, 400));

    }, [name, location]);

    return (
        <div className="flex flex-col md:flex-row items-center gap-y-2  my-2 md:my-4">
            <div className="relative md:mr-16">
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