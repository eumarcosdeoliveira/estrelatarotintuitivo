// src/components/Main.js
import React from 'react';
import BannerWithShel from "./Banner"
import Previsoes from './Prateleira-previsao';
import TabHM from "./Horoscopo-Mapa"

function Main() {
  return (
    <main>
      <div className='max-w-screen-2xl mx-auto'>
        <div className='col-span-1 md:col-span-3 bg-blue-500 text-white p-4'>
          <BannerWithShel/>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
          <div className='col-span-1 md:col-span-1 md:row-span-2 bg-green-500 text-white p-4'>
            <TabHM/>
          </div>
          <div class="col-span-1 md:col-span-2 bg-yellow-500 text-white p-4 h-32">
            Novo Item
          </div>
          <div className='col-span-1 md:col-span-2 bg-red-500 text-white p-4'>
            <Previsoes/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
