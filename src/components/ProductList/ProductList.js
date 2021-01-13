import React, { useContext } from 'react';
import Product from '../Product/Product';
import { BannerContext } from '../BannerLoader/BannerLoader';

const ProductList = () => {
  const { products } = useContext(BannerContext);
  return (
    <>
      <div className='container'>
        {products?.map((item) => (
          <Product key={item.pid} {...item} />
        ))}        
      </div>
      <div className='linkContent'>
        <a className='seeMore' href="#">ZOBACZ WIĘCEJ...</a>
      </div>
    </>
  );
};

export default ProductList;
