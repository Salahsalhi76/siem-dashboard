import React, {useState} from 'react';
import {Inertia} from '@inertiajs/inertia';
import AppInput from "../../Components/AppInput.jsx";
import PasswordInput from "../../Components/PasswordInput.jsx";
import AppButton from "../../Components/AppButton.jsx";
import {useForm} from "@inertiajs/inertia-react";
import {Link} from '@inertiajs/react'

export default () => {
    const {data, errors, post, processing, setData} = useForm({
        email: null,
        password: null,
    })

    function submit(e) {
        e.preventDefault()
        post('/login', {
            preserveScroll: true
        })
    }

    function handleRegisterClicked() {
        ;
    }


    function handleRegisterClicked() {
        Inertia.get('/register');
    }

    return (
        <div className='h-screen w-screen  items-center flex flex-col justify-center'>
            <img src='/assets/logo_colored.svg' className='h-[40px] mb-[8px]'/>

            <h2 className='font-medium font-20 text-xl mb-[40px]'>Merci d'entrer vos informations de connexion</h2>

            <form id='form' onSubmit={submit}>
                <AppInput
                    label='Email'
                    type='email'
                    name='email'
                    error={errors.email}
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    placeHolder='force@adresseemail.com'/>

                <PasswordInput
                    name='password'
                    value={data.password}
                    error={errors.password}
                    label='Mot de passe'
                    onChange={e => setData('password', e.target.value)}
                    placeHolder='********************'/>

                <p className='font-light text-base mb-4 hover:text-blue-500  hover:duration-150 cursor-pointer'
                   onClick={() => Inertia.get('/forgot-password')} >
                       Mot de passe oublié ?</p>
                       <AppButton
                       label='Se connecter'
                       type='submit'
                       loading={processing}/>


            </form>



        </div>
    );
};

