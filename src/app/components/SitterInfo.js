import React  from "react";
import SitterCard from '../components/SitterCard';

export const SitterInfo = ({users}) => {
    
    return (
        <div className="w-60 h-[43rem] rounded-xl p-4 bg-white shadow-2xl my-8 mx-12 overflow-y-auto">
            <h3 className="text-lg text-verde font-bold">Los mejores valorados</h3>
            { users.map(user => (
                <React.Fragment key={user.id}>
                    <SitterCard sitter={user} />
                </React.Fragment>
            )) }
        </div>
    );
};

export default SitterInfo;