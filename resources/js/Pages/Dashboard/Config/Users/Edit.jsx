import React from 'react';
import {useForm, usePage} from "@inertiajs/inertia-react";
import Layout from "../../../../Components/Layout.jsx";
import AppButton from "../../../../Components/AppButton.jsx";
import AppInput from "../../../../Components/AppInput.jsx";
import {SlCalender} from "react-icons/sl";
import {GiCaldera} from "react-icons/gi";
import {route} from "ziggy-js";

const Show = () => {
    const {user} = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        email: user.email,
        phone: user.phone,
        name: user.name,
        prenoms: user.prenoms,

        _method:'PUT'
    })


    function  handleSubmit(e){
        e.preventDefault();
        post(route('users.update', user.id));
    }

    return (
        <div className='w-full h-full px-10 py-5 flex flex-col'>
            <h1 className='font-bold text-[32px]'>Configuration</h1>

            <form
                onSubmit={handleSubmit}
            >
                <div className='mt-2 rounded-xl shadow-sm w-full bg-white p-8'>
                    <p className='font-light  text-lg mb-10'>Editer un compte</p>


                    <div className='mb-10 grid grid-cols-2 gap-3'>
                        <AppInput
                            width='w-full'
                            label='Adresse e-mail'
                            name='email'
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />


                        <AppInput
                            width='w-full'
                            label='Numéro de téléphone'
                            name='phone'
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}/>

                        <AppInput
                            width='w-full'
                            label='Nom'
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />


                        <AppInput
                            width='w-full'
                            label='Prénom'
                            value={data.prenoms}
                            onChange={(e) => setData('prenoms', e.target.value)}/>

                        <AppInput
                            width='w-full'
                            label='Date de création de compte'
                            value={new Date(user.created_at).toISOString().split('T')[0]}
                            icon={<SlCalender/>}
                        />
                    </div>


                    <div>
                        <AppButton
                            width='100px'
                            type='submit'
                            label='Modifier'
                        loading={processing}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

Show.layout = page => <Layout children={page} title="User"/>
export default Show;
