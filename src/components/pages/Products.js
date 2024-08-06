// src/App.js
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Prateleira_produtos from '../Prateleira-produtos';
import BannerWithShelf from '../Banner';

function Products() {
  return (
    <div className="App">
      <Header />
        <BannerWithShelf />
       <Prateleira_produtos />
      <Footer />
    </div>
  );
}

export default Products;
