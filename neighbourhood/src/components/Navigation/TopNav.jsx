import React, { useState, useEffect } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { PiChats } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { PiShoppingCart } from "react-icons/pi";

const TopNavbar = () => { 
 return (
    <article className="TopNavbar">
    <div className="NavColumn1">
     <HiOutlineUserCircle className="ProfilePic"/>
     <div className="NameAndLoc">
    <p>Sofia Roos</p>
    <p><RiMapPinLine />Pipsvägen 24</p>
    </div>
    </div>
    <div className="NavColumn2">
       <PiChats />
       <GoHeart />
       <PiShoppingCart />
    </div>
    </article>
 );
};

export default TopNavbar;