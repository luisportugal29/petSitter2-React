import React from "react";
import NavBar from '../components/NavBar';
import ReservationForm from '../components/reservationForm';

const Reservation = () => {

    return (
        <div className="h-screen bg-crema">
            <NavBar />
            <div className="pl-44 pt-16">
                <h1 className="text-5xl text-verde font-bold mb-12">Reserva</h1>
                <ReservationForm />
            </div>
        </div>
    );
};

export default Reservation;