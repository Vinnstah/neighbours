import React, { useEffect, useState } from 'react';
import BackBtn from '../../components/BackBtn';
import DjurCategory from '../../components/Categories/DjurCategory';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoHammerOutline } from "react-icons/io5";
import { BsFlower1 } from "react-icons/bs";
import { PiHamburger } from "react-icons/pi";
import { LuPartyPopper } from "react-icons/lu";
import { PiCat } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import TradgardCategory from '../../components/Categories/TradgardCategory';
import OvrigtCategory from '../../components/Categories/OvrigtCategory';
import PartyCategory from '../../components/Categories/PartyCategory';
import VerktygCategory from '../../components/Categories/VerktygCategory';
import LivsmedelCategory from '../../components/Categories/LivsmedelCategory';
import { Link } from "react-router-dom";

const CategoryPage = () => {
    return (
    <article className="wrapper">
        <BackBtn />
        <br />
         <div className='APItitle'>
                  <div className='APItitle'>
                     <Link to="/kategori/verktyg" className="link"><h3><IoHammerOutline className="CatIconProd"/>Verktyg</h3>
                     <p><IoIosArrowRoundForward className='rightArrow'/></p>
                     </Link>
                  </div>
        </div>
        <VerktygCategory />
         <div className='APItitle'>
              <div className='APItitle'>
                     <Link to="/kategori/tradgard" className="link"><h3><BsFlower1 className="CatIconProd"/>Trädgård</h3>
                     <p><IoIosArrowRoundForward className='rightArrow'/></p>
                     </Link>
            </div>
        </div>
        <TradgardCategory />
         <div className='APItitle'>
              <Link to="/kategori/livsmedel" className="link"><h3><PiHamburger className="CatIconProd"/>Livsmedel</h3>
                     <p><IoIosArrowRoundForward className='rightArrow'/></p>
                     </Link>
        </div>
        <LivsmedelCategory />
         <div className='APItitle'>
                      <Link to="/kategori/party" className="link"><h3><LuPartyPopper className="CatIconProd"/>Party</h3>
                     <p><IoIosArrowRoundForward className='rightArrow'/></p>
                     </Link>
        </div>
        <PartyCategory />
        <div className='APItitle'>
                      <Link to="/kategori/djur" className="link"><h3><PiCat className="CatIconProd"/>Djur</h3>
                     <p><IoIosArrowRoundForward className='rightArrow'/></p>
                     </Link>
        </div>
        <DjurCategory />
                <div className='APItitle'>
                     <Link to="/kategori/ovrigt" className="link"><h3><HiOutlineDotsHorizontal className="CatIconProd"/>Övrigt</h3>
                     <p><IoIosArrowRoundForward className='rightArrow'/></p>
                     </Link>
        </div>
        <OvrigtCategory />
    </article>
      );
};

export default CategoryPage;