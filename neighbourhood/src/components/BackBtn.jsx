import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';


const BackBtn = () => {
    return (
      <Link to="/" className='link'>
      <p className='productLink'><IoIosArrowRoundBack className='backArrow'/>
      Tillbaka
      </p>
      </Link>
      );
};

export default BackBtn;