import React from 'react';
import BannerWithShel from "./Banner";
import Previsoes from './Prateleira-previsao';
import Artigos from './Prateleira-artigos';
import TabHM from "./Horoscopo-Mapa";
import TrendsList from './Maispedidos';

function Main() {
  return (
    <main>
      <div className='max-w-screen-2xl mx-auto'>
        <div className='col-span-1 xl:col-span-3 text-white p-4'>
          <BannerWithShel />
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 gap-1 gap-y-2'>
          <div className='min-w-80 lg:col-span-1 text-white p-4 4'>
            <TabHM />
            <TrendsList />
          </div>
          
          <div className='lg:col-span-2 text-white space-y-1 p-6'>
            <div className="text-slate-200 p-4 mb-5 h-32 bg-slate-50">
              ADS
            </div>
            <Previsoes />
            <div className="text-slate-200 p-5 mb-5 h-32 bg-slate-50">
              ADS
            </div>
            <Artigos />
          </div>
        </div>
      </div>
    </main>
  );
}


export default Main;
