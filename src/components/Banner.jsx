import React, { useEffect } from 'react';
import styles from "./css/Banner.module.css";

const BannerWithShelf = () => {
  useEffect(() => {
    const container = document.getElementById('scroll-container');
    const cloneChildren = () => {
      const items = Array.from(container.children);
      items.forEach(item => {
        container.appendChild(item.cloneNode(true));
      });
    };

    const scrollStep = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0; // Reset scroll to the start
      } else {
        container.scrollLeft += 1;
      }
    };

    cloneChildren();
    const scrollInterval = setInterval(scrollStep, 30); // Adjust the speed here

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative w-full bg-gray-200 rounded-3xl mx-auto flex max-w-screen-2xl items-center justify-between p-6 lg:px-8">
      <div className="w-full h-64 bg-gray-200 rounded-3xl flex items-center justify-center">
        <span className="text-gray-500 text-xl">Banner Principal</span>
      </div>
      <div id="container" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-11/12 rounded-xl">
        <div
          id="scroll-container"
          className={`flex justify-start space-x-4 bg-white p-5 rounded-3xl overflow-x-hidden whitespace-nowrap ${styles['scroll-container']}`}
        >
          {['Adoçamento de Casais', 'Limpeza Energética', 'Interpretação de Sonhos', 'Numerologia', 'Leitura de Tarot', 'Pergunta Objetiva'].map((produto, index) => (
            <button key={index} className="flex flex-row gap-2 items-center py-6 px-7 space-x-2 bg-gray-100 p-5 rounded-xl flex-shrink-1 duration-400 hover:bg-gray-300 active:bg-gray-300">
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-violet-600	">
                  <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                </svg>
               <span className="text-black">{produto}</span>  
              
              
            </button>
          ))}
        </div>
        <div className={`${styles['fade-out']} ${styles['fade-out-left']}`}></div>
        <div className={`${styles['fade-out']} ${styles['fade-out-right']}`}></div>
      </div>
    </div>
  );
};

export default BannerWithShelf;
