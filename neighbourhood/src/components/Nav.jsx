import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { BiUser } from "react-icons/bi";


const Navbar = () => {
  return (
    <div className="navbar">
          <Link to="/" className="nav-link">
          <IoHomeOutline  className="navIcon"/>
            Startsida
          </Link>
          <Link
            to="/Sok"
            className="nav-link"
          >
            <IoIosSearch  className="navIcon"/>
            Sök
          </Link>
          <Link
            to="/lana-ut"
            className="nav-link"
          >
            <LuPlus  className="navIcon"/>
            Låna ut
          </Link>
          <Link
          to="/min-profil" 
          className="nav-link"
          >
            <BiUser className="navIcon"/>
            Min profil
          </Link>
          </div>
  );
};

export default Navbar;