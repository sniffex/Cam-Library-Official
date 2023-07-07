import React from 'react';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';
import HomeBook from '../partials/BookComponents/HomeBook';
import { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom";


const Home = ({ category }) => {
    // const [data, setData] = useState([]);

    //     useEffect(() => {
    //         const fetchData = async () => {
    //         const response = await fetch(
    //             `https://camlibrary.net/api/products-all?category=${category}`
    //         );
    //         const data = await response.json();
    //         setData(data);
    //         };
    //         fetchData();
    //     }, [category]);
    
    const [data, setData] = useState([]);

  useEffect(() => {
    // Make API request here to fetch the data
    fetch("https://camlibrary.net/api/products-all")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0,10)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <Nav/>
    <HomeBook />
    <Footer/>
    </>
  );
}  


export default Home;