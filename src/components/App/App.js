import React from 'react';
import './App.css';
import ProductList from '../ProductList/ProductList';
import BannerLoader from '../BannerLoader/BannerLoader';

const App = () => {
  return (
    <BannerLoader>
      <div>
        <img className='headerPic' src="https://www.avon.pl/mediaMarket-pl/8980/hp-1760x140_unq_2218b256a09d47b0bdf15c1e2ec54f8c.jpg"></img>
        <ProductList />
      </div>
    </BannerLoader>
  );
};

export { App };
