import React from "react";
import { Rating } from "@mui/material";


export const SitterCard = ({sitter}) => {

    return (
        <div className="bg-verde rounded-lg p-4 my-6 shadow-lg">
            <div className="flex h-14 mb-4">
                <div className="w-14">
                    <div className="h-14 w-14 rounded-full bg-gris"></div>
                </div>
                <div>
                    <p className="text-sm text-white pl-3 line-clamp-2">{`${sitter.name} (${sitter.age}) años`}</p>
                    <Rating 
                    className="text-lg flex justify-center"
                     name="Sitter Rating"
                     value={ sitter.rating }
                     readOnly
                    />
                </div>
            </div>
            <div className="bg-white p-2 rounded-lg h-20 overflow-hidden">
                <p className="text-xs font-light line-clamp-4">{sitter.comment}</p>
            </div>
        </div>
    );
};

export default SitterCard;