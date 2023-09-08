"use client"
import React, { useState } from "react";

const ToggleGroup = ({ options, setValue, btnStyle }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    

    const handleSelectedValue = (newValue, index) => {
        setCurrentIndex(index);
        setValue(newValue);
    };

    const setIconStyle = (index) => {
        let style = 'absolute top-3 left-3 ';

        if ( btnStyle ){
            return  `${style} ${currentIndex === index ? 'text-verde': 'text-gris'}`;
        }

        return `${style} ${currentIndex === index ? 'text-white': 'text-gris'}`;
    };

    return (
        <div className="flex">
            {options.map(( option, index ) => (
                <div 
                 key={ index }
                 className="relative">
                    {option.icon && <option.icon 
                     className={ setIconStyle(index)} /> }
                    <button
                     className={ btnStyle ? 
                        `h-14 w-52 text-verde ${currentIndex === index ? 'border-b-2 border-verde border': ''}}`: 
                        `h-14 w-52
                        ${index === 0 ? 'rounded-tl-xl rounded-bl-xl' : ''}
                        ${index === (options.length - 1) ? 'rounded-tr-xl rounded-br-xl' : ''}
                        ${currentIndex === index ? 'bg-mostaza text-white' : 'bg-white text-gris border border-2'}` 
                    }
                     onClick={() => handleSelectedValue(option.name, index)}
                    >
                        <span className="ml-8"> { option.name } </span>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ToggleGroup;