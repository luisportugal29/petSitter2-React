import React from "react";
import NavBar from '../components/NavBar';
import ReservationForm from '../components/reservationForm';

const Reservation = () => {

    return (
        <div className="h-screen bg-crema">
            <NavBar />
            <h1 className="text-4xl text-verde font-bold">Reserva</h1>
            <ReservationForm />
        </div>
    );
};

export default Reservation;