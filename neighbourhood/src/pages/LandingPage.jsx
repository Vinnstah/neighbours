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
           <h4>Hyr igen</h4>
          <p><IoIosArrowRoundForward className='rightArrow'/></p>
        </div>
        <ProductList />
        <div className='APItitle'>
           <h4>Nytt i grannskapet</h4>
          <p><IoIosArrowRoundForward className='rightArrow'/></p>
        </div>
          <ProductList  />
          <div className='APItitle'>
           <h4>Se allt</h4>
        </div>
        <ProductList />
    </div>
    </div>
  );
};

export default LandingPage;