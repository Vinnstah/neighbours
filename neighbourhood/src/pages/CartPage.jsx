import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartPage = () => {
const {
  cart,
  setCart,
  removeFromCart,
  insurance,
  setInsurance,
  insuranceCost,
  setInsuranceCost,
  totalPrice,
  setTotalPrice
} = useContext(CartContext);


useEffect(() => {
  const baseTotal = cart.reduce((sum, product) => sum + (product.price || 0) * (product.itemCount || 1), 0);
  const calculatedInsurance = insurance === "ja"
    ? cart.reduce((sum, product) => sum + (product.itemCount || 1) * 19, 0)
    : 0;
  setInsuranceCost(calculatedInsurance);
  setTotalPrice(baseTotal + calculatedInsurance);
}, [cart, insurance]);

  const removeProduct = (index) => {
    const updatedCart = cart.map((p, i) =>
      i === index ? { ...p, itemCount: p.itemCount - 1 } : p
    );
    if (updatedCart[index].itemCount <= 0) {
      removeFromCart(updatedCart[index].id);
    } else {
      setCart(updatedCart);
    }
  };

  return (
    <div className="wrapper">
      <h2>Varukorg</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Här var det tomt!</h3>
          <Link to={"/"}>
            <button className="primary-btn">Hitta något att låna</button>
          </Link>
        </div>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((product, index) => 
              <li key={index}>
                <div className="cart-items">
                  <div className="cart-img-text-info">
                    <div className="cart-img-text">
                      <img className="cart-img" src={product.productImg} alt={product.productName} />
                      <div className="cart-product-info">
                        <h3>{product.productName}</h3>
                        <p className="cart-p">
                          <b>Lånas ut av:</b> 
                          <img src={product.renterImg} alt="" className="cart-renter-img" /> 
                          {product.productRenter}
                        </p>
                      </div>
                    </div> 
                    <button onClick={() => removeFromCart(product.id)} className="trash-btn">
                      <IoTrashOutline />
                    </button>
                  </div>
                </div>
                <hr className="Bar"/>
              </li>
            )}
          </ul>
          <div className="insurance">
          <h3>Vill du ha försäkring?</h3>
          <p>Med försäkring så står vi för alla skador som eventuellt uppstår. Utan försäkring står du för eventuella skador. Försäkringen kostar 19kr per produkt per låne-tillfälle.</p>
          <li className="insurance-radio-btn">
            <label>
              <input
                type="radio"
                name="insurance"
                value="ja"
                checked={insurance === "ja"}
                onChange={() => setInsurance("ja")}
              />
              Ja
            </label>
            <label>
              <input
                type="radio"
                name="insurance"
                value="nej"
                checked={insurance === "nej"}
                onChange={() => setInsurance("nej")}
              />
              Nej
            </label>
          </li>
          <div className="cart-payment">
          <p>Totalt:</p>
          <p>{totalPrice} kr</p>
          </div>
          </div>

          <div className="cart-btns">
            <Link to="/betalning"><button className="primary-btn">Låna</button></Link>
            <Link to="/"><button className="secondary-btn">Leta efter annan produkt</button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
