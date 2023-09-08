"use client"
import React, { useState } from "react";
import { Rating } from "@mui/material";
import Comment from '../components/Comment';

const CommentList = () => {

    const [rating, setRating] = useState(5);
    const [comments, setComments] = useState([
        {
            id: 1,
            text: `Esmeralda es una profesional del cuidado de casas. Es una grande comunicadora
            , puntual, amable, limpiay lo mas importante es muy cariñosa con olive.`,
            location: 'Culicán Sin',
            date: '23-04-2023',
            photoUrl: ''
        },
        {
            id: 2,
            text: `Esmeralda es una profesional del cuidado de casas. Es una grande comunicadora
            , puntual, amable, limpiay lo mas importante es muy cariñosa con olive.`,
            location: 'Culicán Sin',
            date: '23-04-2023',
            photoUrl: ''
        },
        {
            id: 3,
            text: `Esmeralda es una profesional del cuidado de casas. Es una grande comunicadora
            , puntual, amable, limpiay lo mas importante es muy cariñosa con olive.`,
            location: 'Culicán Sin',
            date: '23-04-2023',
            photoUrl: ''
        },
        {
            id: 4,
            text: `Esmeralda es una profesional del cuidado de casas. Es una grande comunicadora
            , puntual, amable, limpiay lo mas importante es muy cariñosa con olive.`,
            location: 'Culicán Sin',
            date: '23-04-2023',
            photoUrl: ''
        },
        {
            id: 5,
            text: `Esmeralda es una profesional del cuidado de casas. Es una grande comunicadora
            , puntual, amable, limpiay lo mas importante es muy cariñosa con olive.`,
            location: 'Culicán Sin',
            date: '23-04-2023',
            photoUrl: ''
        },
        {
            id: 6,
            text: `Esmeralda es una profesional del cuidado de casas. Es una grande comunicadora
            , puntual, amable, limpiay lo mas importante es muy cariñosa con olive.`,
            location: 'Culicán Sin',
            date: '23-04-2023',
            photoUrl: ''
        },
        {
            id: 7,
            text: `Esmeralda es una profesional del cuidado de casas. Es una grande comunicadora
            , puntual, amable, limpiay lo mas importante es muy cariñosa con olive.`,
            location: 'Culicán Sin',
            date: '23-04-2023',
            photoUrl: ''
        }
    ]);

    return (
        <div className="h-[39rem] overflow-y-auto">
            <Rating 
             name="sitter-rating"
             value={rating}
             readOnly
            />
            <p className="text-sm mt-2 mb-4">117 valoraciones<span className="text-sky-500">(Comentarios mostrados)</span></p>
            {comments.map(comment => (
                <React.Fragment key={comment.id}>
                    <Comment comment={comment} />
                </React.Fragment>
            ))}
            <button className="ml-12">ver mas...</button>
        </div>
    );
};


export default CommentList;