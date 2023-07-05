import React, { useEffect, useState } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const HomeBookLogin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Make API request here to fetch the data
        fetch('http://127.0.0.1:8000/api/products-all')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded-lg border shadow-md overflow-hidden"
                >
                    <div className="p-24">
                        <div className="flex justify-center items-center">
                            {/*<iframe src="https://drive.google.com/file/d/10K0MSdv2pfe6lLWjuwKRouufpVd6GKuW/preview#page=1" width="500" height="375"></iframe>*/}
                            {/*<image href={item.image} className='w-24 h-24' />*/}
                        </div>
                        <div className="flex flex-col mb-4 mt-2">
                            <p className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.title}
                            </p>
                        </div>
                        <span className="flex flex-row gap-2">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </span>
                        <div className="flex flex-row gap-2">
                            <a
                                href={item.download}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Download
                                <AiOutlineDownload size="1.5rem" className="pl-1" />
                            </a>
                            <div className="px-2 py-1 bg-white border-2 rounded-lg">
                                <Link
                                    to={`/pdfviewer?link=${encodeURIComponent(
                                        item.link
                                    )}&title=${encodeURIComponent(
                                        item.title
                                    )}&description=${encodeURIComponent(
                                        item.description
                                    )}`}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-blue-700 text-gray-900 font-medium'
                                >
                                    Views
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomeBookLogin;
