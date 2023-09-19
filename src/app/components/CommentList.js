"use client"
import React from "react";
import { Rating } from "@mui/material";
import Comment from '../components/Comment';

const CommentList = ({comments, rating}) => {
    
    return (
        <div className="h-[39rem] overflow-y-auto mt-8">
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