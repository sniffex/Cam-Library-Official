import React, { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom";
import item from "../Item.jsx";

const HomeBookLogin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make API request here to fetch the data
    fetch("https://camlibrary.net/api/products-all")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0,10)))
      .catch((error) => console.log(error));
  }, []);
  //try commit

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1">
      {data.map((item) => (
        <div
        key={item.id}
        className="max-w-md bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-2 mt-24">
        <div className="flex justify-center">
            <img src={item.image_link} className="w-64 h-96" />
          </div>
        <div className="p-4">
          <div className="flex justify-center items-center">
            <div className="flex flex-col mb-4 mt-2">
              <p className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              <div className="flex flex-row gap-2">
                {/* <div className="px-2 py-1 bg-white border-2 rounded-lg">
                  <Link
                    to={`/pdfviewer?link=${encodeURIComponent(
                      item.book_link
                    )}&title=${encodeURIComponent(
                      item.title
                    )}&description=${encodeURIComponent(item.description)}`}
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 text-gray-900 font-medium"
                  >
                    Views
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>      
      ))}
    </div>
  );
};

export default HomeBookLogin;
