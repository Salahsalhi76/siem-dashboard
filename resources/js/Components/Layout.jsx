import React from 'react';
import DrawerSide from "./DrawerSide.jsx";
import {Head} from "@inertiajs/inertia-react";
import TopHeader from "./TopHeader.jsx";

const Layout = ({children, title}) => {
    return (
        <div className='flex w-screen h-screen'>
            <Head title={title}/>
            <DrawerSide/>

            <div className='flex-1 flex flex-col w-full h-full'>
                <TopHeader/>
                <div className='h-full w-full overflow-y-scroll bg-[#FAFAFA]'>
                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
