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
          className={`flex justify-start space-x-4 bg-white p-4 rounded-xl overflow-x-hidden whitespace-nowrap ${styles['scroll-container']}`}
        >
          {['Produto 01', 'Produto 02', 'Produto 03', 'Produto 04', 'Produto 05', 'Produto 06', 'Produto 07', 'Produto 08'].map((produto, index) => (
            <div key={index} className="flex flex-row items-center space-x-2.5 bg-gray-100 p-4 rounded-xl flex-shrink-0">
              <button className="bg-white p-2 rounded-full">
                <span className="text-purple-500 text-2xl">+</span>
              </button>
              <span className="text-black">{produto}</span>
            </div>
          ))}
        </div>
        <div className={`${styles['fade-out']} ${styles['fade-out-left']}`}></div>
        <div className={`${styles['fade-out']} ${styles['fade-out-right']}`}></div>
      </div>
    </div>
  );
};

export default BannerWithShelf;
