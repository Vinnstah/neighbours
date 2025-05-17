import React from 'react';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';

const LandingPage = () => {
  return (
    <div>
      <div className='wrapper'>
        <CategoryList />
        <p>sök ruta här</p>
       <ProductList  />
    </div>
    </div>
  );
};

export default LandingPage;