"use client"
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSitter } from '../../redux/features/sitters-slice';
import { useSelector } from "react-redux";

import SitterPhotos from './SitterPhotos';
import CommentList from './CommentList';

const Profile = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const sitter = useSelector(state => state.sitter.value.sitter);

    useEffect(() => {
        dispatch(fetchSitter(id));
    },[ id ]);

    return (
        <>
        {sitter && <div className="flex px-12 mt-6">
                <div className="w-2/3 border">
                    <SitterPhotos photos={sitter.photos} />
                    <CommentList comments={sitter.comments} />
                </div>
                <div className="w-1/3">
                    <div>
                        <h3> {sitter.name} </h3>
                        <p className="font-bold">Se ubica en: 
                            <span className="font-light text-sm"> {sitter.city} </span>
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
                        <button className="bg-verde p-2 rounded-lg text-white">Contratar a {sitter.name}</button>
                        <button className="bg-mostaza p-2 rounded-lg text-white">Hasme una pregunta</button>
                    </div>
                    <div className="mb-3">
                        <h3 className="font-bold text-lg mb-3">{ sitter.name }</h3>
                        <p className="font-light text-sm"> {sitter.description} </p>
                    </div>
                    <div className="mb-3">
                        <h3 className=" font-bold text-lg mb-3">Algunas habilidades</h3>
                        {sitter.skills.map( (skill, index) => (
                            <ul key={index}>
                                <li>{skill}</li>
                            </ul>
                        ))}
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
            }
        </>
    );
};

export default Profile;