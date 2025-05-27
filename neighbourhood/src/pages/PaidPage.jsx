import React from 'react';
import { Link } from "react-router-dom";

const PaidPage = () => {

    return (
        <div className='wrapper'>
        <p>Grattis du lånar produkten!</p>
        <p>Du kan låna produkten i: <strong>5</strong> dagar!</p>
        <Link to={"/"}><button className='primary-btn'>Låna fler produkter</button></Link>
        </div> 
   )
}

export default PaidPage;