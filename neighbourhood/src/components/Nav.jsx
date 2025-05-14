import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="navbar">
          <Link to="/" className="nav-link">
          <IoHome   className="navIcon"/>
            Startsida
          </Link>
          <Link
            to="/Sok"
            className="nav-link"
          >
            <IoSearchSharp  className="navIcon"/>
            Sök
          </Link>
          <Link
            to="/lana-ut"
            className="nav-link"
          >
            <FaPlus   className="navIcon"/>
            Låna ut
          </Link>
          <Link
          to="/min-profil" 
          className="nav-link"
          >
            <FaUser   className="navIcon"/>
            Min profil
          </Link>
          </div>
  );
};

export default Navbar;