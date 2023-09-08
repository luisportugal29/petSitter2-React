import React from "react";
import { ImageList,  ImageListItem } from "@mui/material";

import NavBar from '../components/NavBar';
import CommentList from '../components/CommentList';


const itemData = [
    {
        id: 1,
        img: '/images/checo.jpg',
        title: 'Checo Perez',
    },
    {
        id: 2,
        img: '/images/verstappen.jpg',
        title: 'Max Verstappen',
    },
    {
        id: 3,
        img: '/images/leclerc.jpg',
        title: 'Charles Leclerc',
    },
    {
        id: 4,
        img: '/images/hamilton.jpg',
        title: 'Lewis Hamilton',
    },
];

  

const SitterProfile = () => {

    return (
        <div className="h-screen bg-crema">
            <NavBar />
            <div className="flex px-12 mt-6">
                <div className="w-2/3 border">
                    <div className="flex w-full h-[24rem] bg-white  rounded-lg shadow-xl p-8 overflow-x-auto">
                    {itemData.map(item => (
                        <img 
                        className="mr-8"
                        key={item.id}
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        />
                    ))}
                    </div>
                    <CommentList />
                </div>
                <div className="w-1/3">
                    <div className="">
                        <h3>Esmeralda Aguilar</h3>
                        <p className="font-bold">Se ubica en: 
                            <span className="font-light text-sm"> Colonia las coloradas Culiacán Sin.(31) Años de experiencia con:</span>
                        </p>
                        <div className="flex justify-between mb-2">
                            <div >
                                <p className="font-bold mb-1">Hospedaje</p>
                                <p className="font-light text-sm">en casa del cuidador</p>
                            </div>
                            <div>
                                <p className="font-bold mb-1">$300</p>
                                <p className="font-light text-sm">por dia</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div >
                                <p className="font-bold mb-1">Guardería de día</p>
                                <p className="font-light text-sm">en guarderia del cuidador</p>
                            </div>
                            <div>
                                <p className="font-bold mb-1">$200</p>
                                <p className="font-light text-sm">por dia</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4 px-4">
                        <button className="bg-verde p-2 rounded-lg text-white">Contratar a Esmeralda</button>
                        <button className="bg-mostaza p-2 rounded-lg text-white">Hasme una pregunta</button>
                    </div>
                    <div className="mb-3">
                        <h3 className="font-bold text-lg mb-3">Esmeralda Aguilar</h3>
                        <p className="font-light text-sm">
                            Me encantan los animales, los respetos, los cuido y les doy mucho amor.
                            Cuando se quedan en casa perritos de otras personas lo trato como si 
                            fuera miembro de la familia, y de igual manera cuando lo saco a pasear.
                            Los llevo a caminar al parque o dependiendo la instrucción que me dé
                            su dueño
                        </p>
                    </div>
                    <div className="mb-3">
                        <h3 className=" font-bold text-lg mb-3">Algunas habilidades</h3>
                        <ul>
                            <li>Administra Inyecciones</li>
                            <li>Administra Medicina</li>
                            <li>Cuidado Especiales</li>
                            <li>Formación en primero auxilios</li>
                            <li>Experiencia con perros activos</li>
                            <li>Experiencia con mascotas de tercera edad</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">Ubicación</h3>
                        <img
                         src="/images/checo.jpg" 
                         alt="Checo Perez"
                         loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SitterProfile;