import React from 'react';
import Footer from '../partials/Footer';
import NavLog from '../partials/NavLog';
import HomeBookLogin from "../partials/BookComponents/HomeBookLogin.jsx";

const HomeLogin = () => {

    return (
        
        <>

        <NavLog/>
        <main className="dark:bg-gray-900 bg-slate-100 w-full h-rotate-0">
            <div className='w-md pt-32 2xl:px-46 xl:px-16 lg:px-8 md:px-4 sm:px-2'>
                <div className='flex items-center '>
            <div id='slider'
                 className='w-full rounded-lg h-auto p-2 inline-block whitespace-nowrap overflow-x-auto'
                 style={{ scrollBehavior: 'smooth' }}>
                <HomeBookLogin/>
            </div>
                </div>
            </div>
        </main>
        <Footer /> 

    </>
       
    );
};

export default HomeLogin;