
import React  from "react";
import SitterListElement from '../components/SitterListElement';
import FilterList from '../components/Filters';

const SitterList = ({ sitters }) => {

    return (
        <div className="md:py-4">
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