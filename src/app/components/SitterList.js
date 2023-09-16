"use client"
import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import SitterListElement from '../components/SitterListElement';
import FilterList from '../components/Filters';
import { setSitters } from "../../redux/features/sitters-slice";

const SitterList = ({data}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSitters(data));
    },[]);

    const sitters = useSelector(state => state.sitter.value.sitters);


    return (
        <div className="md:py-4">
            <FilterList />
            <h1 className="text-xl font-bold mb-4"> Cuidador </h1>
                <div className="border h-[32rem] overflow-y-auto">
                    <SitterListElement sitter={null}/>
                    {sitters.map((sitter, index) => (
                        <React.Fragment key={index}>
                            <SitterListElement
                            sitter={sitter} 
                            />
                        </React.Fragment>
                    ))}
                </div>
        </div>
    );
};

export default SitterList;