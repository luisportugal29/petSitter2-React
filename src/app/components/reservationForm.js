"use client"
import React, { useState } from "react";
import ToggleGroup from '../components/ToggleGroup';
import WorkIcon from '@mui/icons-material/Work';
import PetsIcon from '@mui/icons-material/Pets';


const ReservationForm = () => {

    const [type, setType ] = useState('');
    const [arrivalTime, setArrivalTime ] = useState('');
    const [mode, setMode] = useState('');
    const [departureTime, setDepartureTime ] = useState('');
    const [petType, setPetType] = useState('');


    const [index, setIndex] = useState(0);

    return (
        <div className="flex flex-col"> 
           <ToggleGroup 
            options={[ { name: 'Hospedaje', icon: WorkIcon }, { name: 'Guardería', icon: WorkIcon } ]} 
            setValue={setType}
           />
           <div className="mt-8">
                <h3>Colonia las coloradas</h3>
                <ToggleGroup 
                 options={[{name: 'Entrada'},{name: 'Salida'}]}
                 setValue={setMode}
                />
           </div>
           <div>
                <ToggleGroup 
                 options={[{name: 'Perros', icon: PetsIcon}, {name: 'Gatos'},{name: 'Aves'}]}
                 setValue={setPetType}
                 btnStyle
                />
           </div>
        </div>
    )
};


export default ReservationForm;