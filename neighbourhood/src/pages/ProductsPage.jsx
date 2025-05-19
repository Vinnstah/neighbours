import React from 'react';
import GetProduct from '../components/GetProduct';

const ProductsPage = () => {
  return (
    <div>
      <div className='wrapper'>
        <h2>Alla produkter</h2>
        <GetProduct />
        </div>
    </div>
  );
};

export default ProductsPage;