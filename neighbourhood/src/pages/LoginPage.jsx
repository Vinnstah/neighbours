import React from 'react';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <div className='loginWrapper'>
        <img src={logo} alt="neighbours logga" />
        <h2>Hur vill du logga in?</h2>
        <Link to="/" className="cat-link"><button className='logInBtn'><img src="https://www.bankid.com/assets/bankid/img/logo-bank-id-white.svg" alt="bankid logga" />BANK-ID på denna enhet</button></Link>
        <Link to="/registrera-konto" className="cat-link"><button className='secondarylogInBtn'>Registrera dig här</button></Link>
        <a href="/">Logga in med BankID från en annan enhet</a>
        <p>Behöver du hjälp? Kontakta oss <b>här!</b></p>
        </div>
    </div>
  );
};

export default LoginPage;