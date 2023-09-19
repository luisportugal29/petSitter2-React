"use client"
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';
import { useSelector } from "react-redux";
import { signUp } from "../../redux/features/auth-slice";

const SignUp = () => {

    //global state
    const isAuth = useSelector(state => state.auth.value.isAuth);

    //hooks
    const dispatch = useDispatch();
    const router = useRouter();

    //local state
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

    useEffect(() => {
        console.log(isAuth);
        if ( isAuth )
            router.push('/sitters');
    },[isAuth]);

     const handleSignUp = (e) => {
        e.preventDefault();
        const user = { name, lastName, address, phoneNumber, email, password };
        dispatch(signUp(user));

    };

    return (
        <div className="mx-auto">
            <h1 className='text-white text-3xl md:text-5xl mb-10 font-bold'>Crear Cuenta</h1>
            <form
             className="w-full grid grid-cols-3 gap-y-6 md:gap-y-10 md:gap-x-6"
             onSubmit={(e) => handleSignUp(e) }
            >
               { elements.map(({name, value, setter}, index) => (
                <div 
                 className="col-span-3 md:col-span-1"
                 key={index}
                 >
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