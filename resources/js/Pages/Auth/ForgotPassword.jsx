import React, {useState} from 'react';
import {Inertia} from '@inertiajs/inertia';
import AppInput from "../../Components/AppInput.jsx";
import PasswordInput from "../../Components/PasswordInput.jsx";
import AppButton from "../../Components/AppButton.jsx";
import {useForm} from "@inertiajs/inertia-react";
import {Link,} from '@inertiajs/react'
import {usePage} from '@inertiajs/inertia-react';

export default () => {
    const {flash} = usePage().props;
    const {data, errors, post, processing, setData} = useForm({
        email: null,
        password: null,
    })

    function submit(e) {
        e.preventDefault()
        post('/forgot-password', {
            preserveScroll: true
        })
    }


    return (
        <div className='h-screen w-screen  items-center flex flex-col justify-center relative'>
            <title>Hell</title>
            <img src='/assets/logo_colored.svg' className='h-[40px] mb-[8px]'/>


            <form id='form' onSubmit={submit}>
                <AppInput
                    label='Adresse e-mail'
                    type='email'
                    name='email'
                    error={errors.email}
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    placeHolder='force@adresseemail.com'/>


                <AppButton
                    label='Se connecter'
                    type='submit'
                    loading={processing}/>

                <div className='w-full flex  justify-center mt-2'>
                    <p className='font-light text-base mb-4 text-blue-500  hover:duration-150 cursor-pointer'
                       onClick={() => window.history.back()}>
                        Retour à la page connexion</p>
                </div>

            </form>


            {
                (flash?.success || flash?.error) && <div
                    className={`absolute top-10 left-10 text-white rounded ${flash.success ? 'bg-success' : 'bg-error'} px-5 py-4`}>
                    {flash.success}{flash?.error}
                </div>
            }
        </div>
    );
};

