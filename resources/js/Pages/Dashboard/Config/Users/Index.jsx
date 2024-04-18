import React from 'react';
import Layout from "../../../../Components/Layout.jsx";
import AppInput from "../../../../Components/AppInput.jsx";
import {IoMdAdd} from "react-icons/io";
import UsersTable from "../../../../Components/User/UsersTable.jsx";
import {usePage} from "@inertiajs/inertia-react";
import {CiSearch} from "react-icons/ci";
import {FaSearch} from "react-icons/fa";
import {BiSearch} from "react-icons/bi";
import SearchInput from "../../../../Components/Shared/SearchInput.jsx";

const Index = () => {
    const { users } = usePage().props;

    console.log('usersusersusers')
    console.log(users)

    return (
        <div className='w-full h-full px-10 py-5 flex flex-col'>

            <h1 className='font-bold text-[32px]'>Configuration</h1>
            <div className='h-3'/>
            <SearchInput
                width='w-full'
                placeHolder='Vous cherchez quel utilisateur ...'
                icon={<BiSearch size={22}/>}
            />

            <div className='flex'>
                <div
                    className='mt-1 bg-primary rounded-xl py-3 px-4 flex  text-white items-center gap-1.5 cursor-pointer '>
                    <h2>Ajouter un utilisateur</h2>
                    <IoMdAdd color='white' size={22}/>
                </div>
            </div>

            <div className='h-5'/>
            <UsersTable data={users}/>
        </div>
    );
};


Index.layout = page => <Layout children={page} title="Users"/>

export default Index;
