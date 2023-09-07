import React from "react";
import { Rating } from "@mui/material";

const SitterListElement = ({sitter}) => {

    return (
        <div className=" mb-4">
            <div className={sitter ? 'grid grid-cols-6 rounded-lg bg-white shadow-xl py-2': 'grid grid-cols-6 mb-8'}>
                <div className="flex justify-center items-center">
                    { sitter ? (<div className="h-14 w-14 rounded-full bg-gris"></div> ) : (<span>Cuidador</span>)}
                </div>
                <div className="flex justify-center items-center">
                    <span>{ sitter ? sitter.name : 'Nombre' }</span>
                </div>
                <div className="flex justify-center items-center">
                    <span>{ sitter ? sitter.lastName : 'Ubicación' }</span>
                </div>
                <div className="flex justify-center items-center">
                    <span>{ sitter ? sitter.city : 'Ciudad' }</span>
                </div>
                <div className="flex justify-center items-center">
                    <span>{ sitter ? sitter.state : 'Estado' }</span>
                </div>
                <div className="flex justify-center items-center">
                    { sitter ?  
                        <Rating
                        name="sitter rating"
                        value={ sitter.rating } 
                        readOnly
                        /> : 
                        <span>Valoraciones</span>
                    }
                </div>
            </div>
        </div>
    );
}

export default SitterListElement;