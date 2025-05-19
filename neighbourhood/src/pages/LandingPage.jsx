import React from 'react';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';
import SearchBar from '../components/SearchBar';
import { IoIosArrowRoundForward } from "react-icons/io";

const LandingPage = () => {
  return (
    <div>
      <div className='wrapper'>
        <CategoryList />
        <hr  className='Bar'/>
        <SearchBar />
        <div className='APItitle'>
           <h3>Hyr igen</h3>
          <p><IoIosArrowRoundForward className='rightArrow'/></p>
        </div>
        <ProductList />
        <div className='APItitle'>
           <h3>Nytt i grannskapet</h3>
          <p><IoIosArrowRoundForward className='rightArrow'/></p>
        </div>
          <ProductList  />
          <div className='APItitle'>
           <h3>Se allt</h3>
        </div>
        <ProductList />
    </div>
    </div>
  );
};

export default LandingPage;