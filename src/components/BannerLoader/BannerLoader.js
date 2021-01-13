import React, { useEffect, useState } from 'react';
import { ProductApiService } from '../../api';

export const BannerContext = React.createContext({});

const BannerLoader = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductApiService.getProductApi().then((data) => {
      setProducts(
        data.map((item) => ({
          ...item,
          quantity: item.min
        }))
      );
    });
  }, []);

  const contextValues = {
    products
  };

  return <BannerContext.Provider value={contextValues}>{children}</BannerContext.Provider>;
};

export default BannerLoader;
