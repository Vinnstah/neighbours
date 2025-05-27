import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const { totalPrice, insurance, insuranceCost, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleConfirm = () => {
    setCart([]); 
    navigate("/genomfort-kop");
  };

  return (
    <div className="wrapper">
      <h2>Betalning</h2>
      <p>Försäkring: {insurance === 'ja' ? `Ja` : 'Nej'}</p>
      <p>Totalt att betala: {totalPrice} kr</p>

      <div className="cart-btns">
        {insurance === 'ja' ? (
          <>
            <button className="primary-btn" onClick={handleConfirm}>Betala</button>
            <button className="primary-btn" onClick={handleConfirm}>Betala med Klarna</button>
          </>
        ) : (
          <button className="primary-btn" onClick={handleConfirm}>Låna</button>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
