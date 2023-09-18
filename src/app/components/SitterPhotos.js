"use client"
import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPhoto } from "../../redux/features/sitters-slice";

const SitterPhotos = ({photos}) => {

    const dispatch = useDispatch();
    
    return (
        <div className="flex h-[24rem] bg-white  rounded-lg shadow-xl p-8 overflow-x-auto">
            {photos.map( (photo, index) => (
                <img 
                 className="mr-8 cursor-pointer"
                 onClick={() => dispatch(setCurrentPhoto(photo))}
                 key={index}
                 src={photo}
                 alt="image"
                 loading="lazy"
                />
            ))}
        </div>
    );
};

export default SitterPhotos;