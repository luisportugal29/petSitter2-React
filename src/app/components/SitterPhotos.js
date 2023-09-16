"use client"
"use client"
import React from "react";

const SitterPhotos = ({photos}) => {
    
    return (
        <div className="flex w-full h-[24rem] bg-white  rounded-lg shadow-xl p-8 overflow-x-auto">
            {photos.map( (photo, index) => (
                <img 
                 className="mr-8"
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