import React from 'react';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';
import SearchBar from '../components/SearchBar';

const LandingPage = () => {
  return (
    <div>
      <div className='wrapper'>
        <CategoryList />
        <hr  className='Bar'/>
        <SearchBar />
       <ProductList  />
    </div>
    </div>
  );
};

export default LandingPage;