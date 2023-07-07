import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../partials/Footer";
import NavLog from "../partials/NavLog.jsx";
const PDFViewer = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const link = decodeURIComponent(urlParams.get("link"));
  const title = decodeURIComponent(urlParams.get("title"));
  const description = decodeURIComponent(urlParams.get("description"));

  useEffect(() => {
    // const viewTime = ; // 5 seconds
    // const iframe = document.getElementById('pdfIframe');
    // // Delay the removal of the iframe after the specified view time
    // const timeoutId = setTimeout(() => {
    //     // Remove the iframe from the DOM
    //     iframe.parentNode.removeChild(iframe);
    // }, viewTime);
    // return () => {
    //     // Clean up the timeout when the component is unmounted or updated
    //     clearTimeout(timeoutId);
    // };
  }, []);

  return (
    <>
      <NavLog />
      <main>
      <div className='dark:bg-gray-900 bg-white items-center justify-center h-screen'>
        <div className="mt-36 items-center md:px-16 lg:px-8 px-4">
            <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative ">
            <div className="desc p-4 text-gray-800">
                <div className="iframe-container">
                <iframe
                    id='pdfIframe'
                    src={link}
                    width='100%'
                    height='700'
                    frameBorder='0'
                    scrolling='auto'
                ></iframe>
                </div>
                <a className="title font-bold block cursor-pointer hover:underline">{title}</a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">{description}</span>
            </div>
            </div>
        </div>
        </div>

      </main>
      

      <Footer />
    </>
  );
};

export default PDFViewer;
