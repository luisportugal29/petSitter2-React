"use client"
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSitter } from '../../redux/features/sitters-slice';
import { setCurrentPhoto } from "../../redux/features/sitters-slice";
import { useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';

import SitterPhotos from './SitterPhotos';
import CommentList from './CommentList';

const Profile = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const sitter = useSelector(state => state.sitter.value.sitter);
    const currentPhoto = useSelector(state => state.sitter.value.currentPhoto);

    useEffect(() => {
        dispatch(fetchSitter(id));
    },[ id ]);

    return (
        <>
        {sitter && <div className="relative flex px-24 mt-6 h-[51.5rem] overflow-y-auto justify-center">
            {currentPhoto && (
            <div className="absolute  h-[35rem] bg-red-400 rounded-xl z-30">
                <button 
                className="absolute right-4 top-2"
                onClick={() => dispatch(setCurrentPhoto(''))}
                >
                    <CloseIcon className="text-white text-5xl" />
                </button>
                <img
                className="rounded-xl"
                  src={currentPhoto} 
                  alt="sitter picture"
                  loading="lazy"
                />
            </div>
            )}
                <div className="w-1/2 ">
                    <SitterPhotos photos={sitter.photos} />
                    <CommentList comments={sitter.comments} rating={sitter.rating} />
                </div>
                <div className="w-1/4 ml-8">
                    <div>
                        <h3 className="font-bold text-2xl"> {sitter.name} </h3>
                        <p className="font-bold text-xl mt-4">Se ubica en: 
                            <span className="font-light text-xl"> {sitter.city} </span>
                        </p>
                        <div className="flex justify-between mb-2 mt-4">
                            <div >
                                <p className="font-bold text-xl mb-1">Hospedaje</p>
                                <p className="font-light text-sm">en casa del cuidador</p>
                            </div>
                            <div>
                                <p className="font-bold  mb-1">$300</p>
                                <p className="font-light text-sm">por dia</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div >
                                <p className="font-bold text-xl mb-1">Guardería de día</p>
                                <p className="font-light text-sm">en guarderia del cuidador</p>
                            </div>
                            <div>
                                <p className="font-bold mb-1">$200</p>
                                <p className="font-light text-sm">por dia</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4 mt-12">
                        <button className="bg-verde p-2 rounded-lg text-white">Contratar a {sitter.name}</button>
                        <button className="bg-mostaza p-2 rounded-lg text-white">Hasme una pregunta</button>
                    </div>
                    <div className="mb-3 mt-14">
                        <h3 className="font-bold text-2xl mb-3">{ sitter.name }</h3>
                        <p className="font-light text-lg"> {sitter.description} </p>
                    </div>
                    <div className="mb-3 mt-12">
                        <h3 className=" font-bold text-2xl mb-3">Algunas habilidades</h3>
                        {sitter.skills.map( (skill, index) => (
                            <ul className="list-disc ml-6" key={index}>
                                <li className="text-lg">{skill}</li>
                            </ul>
                        ))}
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl mt-12 mb-2">Ubicación</h3>
                        <img
                         src="/images/location.png" 
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