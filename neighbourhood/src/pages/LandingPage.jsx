import React from 'react';
import ProductList from '../components/ProductList';
import CategoryNav from '../components/Navigation/CategoryNav';
import SearchBar from '../components/SearchBar';
import { IoIosArrowRoundForward } from "react-icons/io";
import GetProduct from '../components/GetProduct';
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className='wrapper'>
        <CategoryNav />
        <hr  className='Bar'/>
        <SearchBar />
        <div className='APItitle'>
           <Link to="/produkter" className="link"><h3>Hyr igen</h3><p><IoIosArrowRoundForward className='rightArrow'/></p></Link>
        </div>
        <ProductList />
        <div className='APItitle'>
           <Link to="/produkter" className="link"><h3>Nytt i grannskapet</h3><p><IoIosArrowRoundForward className='rightArrow'/></p></Link>
        </div>
          <ProductList  />
          <div className='APItitle'>
           <Link to="/produkter" className="link"><h3>Se allt</h3><p><IoIosArrowRoundForward className='rightArrow'/></p></Link>
        </div>
        <GetProduct />
    </div>
    </div>
  );
};

export default LandingPage;