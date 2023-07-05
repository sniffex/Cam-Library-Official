import React from 'react';
import Footer from '../partials/Footer';
import NavLog from '../partials/NavLog';
import HomeBookLogin from "../partials/BookComponents/HomeBookLogin.jsx";

const HomeLogin = () => {

    return (
        
        <>

        <NavLog/>
        <main className=" bg-slate-100 w-full mb-28">
            <HomeBookLogin/>
        </main>
        <Footer /> 
      
    </>
       
    );
};

export default HomeLogin;