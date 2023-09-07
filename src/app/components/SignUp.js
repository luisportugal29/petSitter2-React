"use client"
import React, { useState } from "react";

const SignUp = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmatiion, setPasswordConfirmation] = useState('');

    const elements = [
        { name: 'Nombre (s)', value: name, setter: setName },
        { name: 'Apellido (s)', value: lastName, setter: setLastName },
        { name: 'Dirección', value: address, setter: setAddress },
        { name: 'Telefono', value: phoneNumber, setter: setPhoneNumber },
        { name: 'Correo', value: email, setter: setEmail },
        { name: 'Contraseña', value: password, setter: setPassword },
        { name: 'Repetir Contraseña', value: passwordConfirmatiion, setter: setPasswordConfirmation },
    ];

     const signUp = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container mx-auto">
            <h1 className='text-white text-5xl mb-10 font-bold'>Crear Cuenta</h1>
            <form
             className="w-full grid grid-cols-3 gap-y-10 gap-x-6"
             onSubmit={signUp}
            >
               { elements.map(({name, value, setter}) => (
                <div>
                    <input 
                     className="bg-white w-full h-14 rounded-lg outline-0 p-2 text-black rounded-2xl"
                     placeholder={name}
                     type="text" 
                     value={value}
                     onChange={(e) => setter(e.target.value)}
                    />
                </div>
               ))}
                <div className='col-span-3 flex w-full justify-end'>
                    <button
                        className='h-12 w-96 bg-mostaza rounded-md text-white rounded-2xl font-bold'
                    >
                        Crear Cuenta
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;