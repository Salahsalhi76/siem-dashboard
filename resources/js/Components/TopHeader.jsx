import React from 'react';
import {FaRegBell} from "react-icons/fa";
import {IoIosArrowForward} from "react-icons/io";
import {InertiaLink} from "@inertiajs/inertia-react";
import {route} from "ziggy-js";

const TopHeader = () => {
    const routeWords = location.pathname.split('/');
    return (
        <div className='w-full h-16 bg-white  shadow-sm flex justify-between items-center px-6'>

            <div className='flex gap-2'>
                {routeWords.map((word, index) => (
                    <div className='flex items-center gap-2'>
                        <h1 className={index === routeWords.length - 1? 'text-primary' : ''}>{word}</h1>
                        {index !== routeWords.length - 1 && index !== 0 && <IoIosArrowForward color='grey'/>}
                    </div>
                ))}
            </div>

          <div className='flex gap-4'>
              <InertiaLink href={route('auth.logout')} method='post'>Logout</InertiaLink>
              <FaRegBell size={22}/>
          </div>

        </div>
    );
};

export default TopHeader;
