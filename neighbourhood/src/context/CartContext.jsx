import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }); 

  const [insurance, setInsurance] = useState("nej");
  const [insuranceCost, setInsuranceCost] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      addToCart,
      removeFromCart,
      insurance,
      setInsurance,
      insuranceCost,
      setInsuranceCost,
      totalPrice,
      setTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
