"use client"
import React, { useState } from "react";
import SitterListElement from '../components/SitterListElement';
import FilterList from '../components/Filters';

const SitterList = () => {

    const [sitters, setSitters] = useState([
        {
            photoUrl: '', 
            name: 'Anna Maria Quintero',
            lastName: 'Olivos del prado...',
            city: 'Culiacán',
            state: 'Sinaloa',
            rating: 4
        },
        {
            photoUrl: '', 
            name: 'Anna Maria Quintero',
            lastName: 'Olivos del prado...',
            city: 'Culiacán',
            state: 'Sinaloa',
            rating: 4
        },
        {
            photoUrl: '', 
            name: 'Anna Maria Quintero',
            lastName: 'Olivos del prado...',
            city: 'Culiacán',
            state: 'Sinaloa',
            rating: 4
        },
        {
            photoUrl: '', 
            name: 'Anna Maria Quintero',
            lastName: 'Olivos del prado...',
            city: 'Culiacán',
            state: 'Sinaloa',
            rating: 4
        },
        {
            photoUrl: '', 
            name: 'Anna Maria Quintero',
            lastName: 'Olivos del prado...',
            city: 'Culiacán',
            state: 'Sinaloa',
            rating: 4
        }
    ]);

    return (
        <div className="container py-4">
            <FilterList />
            <h1 className="text-xl font-bold mb-4"> Cuidador </h1>
                <SitterListElement sitter={null}/>
                {sitters.map((sitter, index) => (
                    <React.Fragment key={index}>
                        <SitterListElement
                        sitter={sitter} 
                        />
                    </React.Fragment>
                ))}
        </div>
    );
};

export default SitterList;