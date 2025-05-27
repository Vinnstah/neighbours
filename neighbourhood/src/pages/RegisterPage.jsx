import React from 'react';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <div className='loginWrapper'>
         <img src={logo} alt="neighbours logga" />
         <p>Förnamn</p>
         <input type="text" name="" id="" placeholder='...' className='register-bar'/>
         <p>Efternamn</p>
         <input type="text" placeholder='...' className='register-bar'/>
         <p>Mailadress</p>
         <input type="text" placeholder='...' className='register-bar'/>
         <p>Personnummer</p>
         <input type="text" placeholder='...' className='register-bar'/>
         <p>Gatuadress</p>
         <input type="text" placeholder='...' className='register-bar'/>
         <p>Postnummer</p>
         <input type="text" placeholder='...' className='register-bar'/>
         <p>Stad</p>
         <input type="text" placeholder='...' className='register-bar'/>
          <Link to="/" className="cat-link"><button  className='logInBtn'>Skapa konto</button></Link>
        </div>
    </div>
  );
};

export default RegisterPage;