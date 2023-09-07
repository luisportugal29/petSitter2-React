"use client"
import React, { useState } from "react";
import SitterCard from '../components/SitterCard';

export const SitterInfo = () => {

    const [sitters, setSitters] = useState([
        {
            id: 1,
            name: 'Sebastián Leal',
            age: 28,
            rating: 5,
            comment: 'Sebastian cuida muy bien a mi mascota puntos buenos para el :)'
        },
        {
            id: 2,
            name: 'Elizabeth Olivas Del Valle',
            age: 24,
            rating: 5,
            comment: 'Elizabeth cuida muy bien a mi mascota, se las recomiendo tambien tengo tiempo conociendola ya que ella es mi cuidadora favorita por 2 años :)'
        },
        {
            id: 3,
            name: 'Mateo Gracia',
            age: 30,
            rating: 5,
            comment: 'Mateo cuida muy bien a mi mascota puntos bueno para el :)'
        },
        {
            id:4,
            name: 'Sebastián Leal',
            age: 25,
            rating: 5,
            comment: 'Sebastian cuida muy bien a mi mascota puntos bueno para el :)'
        }
    ]);
    
    return (
        <div className="w-60 h-[43rem] rounded-xl p-4 bg-white shadow-2xl my-8 mx-12 overflow-y-auto">
            <h3 className="text-lg text-verde font-bold">Los mejores valorados</h3>
            { sitters.map(sitter => (
                <React.Fragment key={sitter.id}>
                    <SitterCard sitter={sitter} />
                </React.Fragment>
            )) }
        </div>
    );
};

export default SitterInfo;