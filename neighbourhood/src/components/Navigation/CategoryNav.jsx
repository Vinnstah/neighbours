import React from "react";
import { Link } from "react-router-dom";
import { IoHammerOutline } from "react-icons/io5";
import { BsFlower1 } from "react-icons/bs";
import { PiHamburger } from "react-icons/pi";
import { LuPartyPopper } from "react-icons/lu";
import { PiCat } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";

const CategoryNav = () => { 
    return (
        <article className="wrapper">
            <div className="CatArt">
            <div className="CatDiv">
                <div className="CatCat">
                <Link to="/kategori/verktyg" className="cat-link">
                        <IoHammerOutline  className="CatIcon"/>
                <p className="CatP">Verktyg</p>
                </Link>
                </div>
                <div className="CatCat">
                    <Link to="/kategori/tradgard" className="cat-link">
                    <BsFlower1  className="CatIcon"/>
                    <p className="CatP">Trädgård</p>
                    </Link>
                </div>
                <div className="CatCat">
                    <Link to="/kategori/livsmedel" className="cat-link">
                    <PiHamburger  className="CatIcon"/>
                    <p className="CatP">Livsmedel</p>
                    </Link>
                </div>
                <div className="CatCat">
                    <Link to="/kategori/party" className="cat-link">
                    <LuPartyPopper  className="CatIcon"/>
                    <p className="CatP">Party</p>
                    </Link>
                </div>
                <div className="CatCat">
                    <Link to="/kategori/djur" className="cat-link">
                    <PiCat className="CatIcon"/>
                    <p className="CatP">Djur</p>
                    </Link>
                </div>
                <div className="CatCat">
                    <Link to="/kategori/ovrigt" className="cat-link">
                    <HiOutlineDotsHorizontal className="CatIcon"/>
                    <p className="CatP">Övrigt</p>
                    </Link>
                </div>
            </div>
            <Link to="/kategorier" className="cat-link">
            <p className="CatTitle">Se alla kategorier <IoIosArrowRoundForward className="CarArrowRight"/></p>
            </Link>
            </div>
        </article>
    )
};

export default CategoryNav;