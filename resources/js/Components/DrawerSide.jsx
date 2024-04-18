import React, {useState} from 'react';
import {IoMdSettings} from "react-icons/io";
import {GoFileDirectory} from "react-icons/go";
import {FaRegFileAlt} from "react-icons/fa";
import {GrTechnology} from "react-icons/gr";
import {AiOutlineFileProtect} from "react-icons/ai";
import {TECollapse, TERipple} from "tw-elements-react";
import {
    Collapse,
} from "@material-tailwind/react";
import {route} from "ziggy-js";
import {Head} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";

const DrawerSide = () => {
    const drawerItems = [
        {
            label: 'Configuration',
            icon: <IoMdSettings color='white' size={22}/>,
            route: '/config',
            children: [
                {
                    label: 'Utilisateurs',
                    route: '/users',
                },
                {
                    label: 'Base',
                    route: '/base',
                }, {
                    label: 'Contrôle',
                    route: '/controle',
                },
            ]
        },
        {
            label: 'Dossier',
            icon: <GoFileDirectory color='white' size={22}/>,
            route: '/dossier',
            children: []
        },
        {
            label: 'Projet',
            icon: <FaRegFileAlt color='white' size={22}/>,
            route: '/project',
            children: []
        },
        {
            label: 'Direction Technique',
            icon: <GrTechnology color='white' size={22}/>,
            route: '/direction-technique',
            children: []
        },
        {
            label: 'Protection',
            icon: <AiOutlineFileProtect color='white' size={22}/>,
            route: '/protection',
            children: []
        },

    ];
    return (
        <div className='w-[250px] h-screen flex flex-col '
             style={{backgroundImage: `url(/assets/sidebar_bg.png)`}}
        >
            <div className='flex-1'>
                <div className='bg-[#0E1B6B] py-[16px] flex justify-center'>
                    <img src='/assets/logo.svg' className='w-[143px] h-[32px]'/>
                </div>
                <div className='px-5 mt-5 '>
                    {
                        drawerItems.map(e => <DrawerItem2 item={e}/>)
                    }
                </div>
            </div>

            <div className='mx-5 my-12 flex gap-3 items-center '>
                <div className='h-11 w-11 rounded-full bg-white ' style={{
                    backgroundImage: `url(https://avatars.githubusercontent.com/u/89273323?v=4)`,
                    backgroundSize: 'contain'
                }}/>
                <div className='flex flex-col '>
                    <h2 className='font-medium text-white'>Tim Cook</h2>
                    <p className='font-light text-white  '>timcook@force.com</p>
                </div>
            </div>
        </div>
    );
};


const DrawerItem2 = ({item}) => {
    const isActive = location.pathname.startsWith(item.route);
    const colored = isActive && (!item.children || item.children.length === 0)
    const [show, setShow] = useState(isActive);


    const handleItemClick = () => {
        console.log(item.children.isEmpty)
        if (item.children && item.children.length > 0) {
            setShow(!show);
        } else {
            Inertia.get(item.route);
        }
    };


    return (
        <>

            <div
                className={`w-full mb-3 gap-2 hover:bg-[#4256D0] flex ${colored? 'bg-[#4256D0]' : ''}  items-center text-white cursor-pointer rounded p-2 `}
                onClick={handleItemClick}
            >
                {item.icon}
                <strong>{item.label}</strong>
            </div>

            <Collapse open={show}>
                {
                    item.children && item.children.length > 0 && <div className=' ml-10 '>
                        {
                            item.children.map((e) => <DrawerItemChildren item={{
                                ...e,
                                route: item.route + e.route
                            }}/>)
                        }
                    </div>
                }
            </Collapse>
        </>
    );

}

const DrawerItemChildren = ({item}) => {
    const isActive = location.pathname.startsWith(item.route);
    return <div
        onClick={() => Inertia.get(item.route)}
        className={`mb-1 px-2 py-1.5 gap-2 hover:bg-[#4256D0] ${isActive ? 'bg-[#4256D0]' : ''} flex duration-100 items-center text-white cursor-pointer rounded`}>
        <strong>{item.label}</strong>
    </div>
}


export default DrawerSide;
