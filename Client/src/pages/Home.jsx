import React from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import HomeBook from '../partials/BookComponents/HomeBook';
import { useState, useEffect } from "react";

const Home = ({ category }) => {
    const [data, setData] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
            const response = await fetch(
                `https://example.com/api/products-all?category=${category}`
            );
            const data = await response.json();
            setData(data);
            };
            fetchData();
        }, [category]);
    
    return (
        <>
        <Nav />
        <main className=" bg-slate-100 w-full mb-28"></main>
        {/* ________________________________________ Adventure Stories Book ________________________________________ */}
        <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
        <Footer />
        </>
    );
}

export default Home;