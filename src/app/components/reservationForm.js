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
          <div>
               <div className="grid grid-cols-2 gap-y-8 w-[70rem]"> 
                    <ToggleGroup 
                    options={[ { name: 'Hospedaje', icon: WorkIcon }, { name: 'Guardería', icon: WorkIcon } ]} 
                    setValue={setType}
                    />
                    <ToggleGroup 
                    options={
                    [{name: 'Perros', icon: PetsIcon}, {name: 'Gatos', icon: PetsIcon},{name: 'Aves', icon: PetsIcon}]}
                    setValue={setPetType}
                    btnStyle
                    />
                    <div>
                         <h3 className="text-lg">Colonia las coloradas</h3>
                         <ToggleGroup 
                         options={[{name: 'Entrada'},{name: 'Salida'}]}
                         setValue={setMode}
                         />
                    </div> 
                    <div className="flex items-end">
                         <div className="flex flex-col mr-6 grow">
                              <span className="text-lg ml-2">Hora de entrada:</span>
                              <input 
                               className="h-14 rounded-lg border border-gris focus:outline-none pl-6"
                               placeholder="Entrada"
                               type="text"
                               onChange={e => setArrivalTime(e.target.value)} 
                              />
                         </div>
                         <div className="flex flex-col grow">
                              <span className="text-lg ml-2">Hora de Salida:</span>
                              <input
                              className="h-14 rounded-lg border border-gris focus:outline-none pl-6" 
                              placeholder="Salida"
                              type="text"
                              onChange={e => setDepartureTime(e.target.value)} 
                              />
                         </div>
                    </div>
               </div>
               <div className="flex justify-end mt-44 pr-32">
                    <button className="bg-verde px-24 h-12 rounded-lg text-white">Contratar a Esmeralda</button>
               </div>
          </div>
    )
};


export default ReservationForm;