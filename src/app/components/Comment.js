import React from "react";

export const Comment = ({ comment}) => {

    const { text, date, location , photoUrl } = comment;

    const formatDate = ( date ) => {
        const monthsName = { 1: 'Enero', 2: 'Febrero', 3: 'Marzo', 4: 'Abril', 5: 'Mayo',
                             6: 'Junio', 7: 'Julio', 8: 'Agosto', 9: 'Septiembre',
                             10: 'Octubre', 11: 'Noviembre', 12: 'Diciembre', };

        const day = date.split('-')[0];
        const month = monthsName[parseInt(date.split('-')[1])];
        const year = date.split('-')[2];

        return `${day} ${month} ${year}`;
    };

    return (
        <div className="flex gap-x-2 mb-6">
           <div>
                <div className="h-10 w-10 rounded-full bg-verde border"></div>
           </div>
            <div className="">
                <p className="text-sm font-light">{ text }</p>
                <p className="text-sm mt-4 font-light"> {location}. {formatDate(date)}</p>
            </div>
        </div>
    );
};

export default Comment;