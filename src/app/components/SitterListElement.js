
import React from "react";
import { Rating } from "@mui/material";

const SitterListElement = ({sitter}) => {

    return (
        <div className="mb-2 md:mb-4 mx-2">
            <div className={sitter ? 'flex md:grid grid-cols-6 rounded-lg bg-white shadow-xl py-2': 'hidden md:grid md:grid-cols-6 md:mb-8'}>
                <div className="flex justify-center items-center px-2 md:px-0">
                    { sitter ? (<div className="w-12 h-12 md:h-14 md:w-14 rounded-full bg-gris"></div> ) : (<span>Cuidador</span>)}
                </div>
                <div className="hidden md:flex md:justify-center md:items-center">
                    <span>{ sitter ? sitter.name : 'Nombre' }</span>
                </div>
                <div className="hidden md:flex md:justify-center md:items-center">
                    <span>{ sitter ? sitter.lastName : 'Ubicación' }</span>
                </div>
                <div className="hidden md:flex justify-center items-center">
                    <span>{ sitter ? sitter.city : 'Ciudad' }</span>
                </div>
                <div className="hidden md:flex justify-center items-center">
                    <span>{ sitter ? sitter.state : 'Estado' }</span>
                </div>
                <div className="grow md:hidden">
                   { sitter && (<>
                     <p className="font-bold">{ sitter.name }</p>
                     <p className="font-thin">{ sitter.lastName }</p>
                     </>
                   )}
                </div>
                <div className="flex justify-center items-center">
                    { sitter ? (
                        <div className="mr-4 md:mr-0">
                             <Rating
                            className="text-lg"
                            name="sitter rating"
                            value={ sitter.rating } 
                            readOnly
                            />
                            <p className="font-light text-sm"> { sitter.city }</p>
                        </div>
                    )  : 
                        <span>Valoraciones</span>
                    }
                </div>
            </div>
        </div>
    );
}

export default SitterListElement;