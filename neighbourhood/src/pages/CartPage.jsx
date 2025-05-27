import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, setCart, removeFromCart } = useContext(CartContext);

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
        <div>
          <h3>Här var det tomt!</h3>
          <Link to={"/"}>
            <button>Hitta något att låna</button>
          </Link>
        </div>
      ) : (
        <div>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                <img src={product.productImg} alt={product.productName} />
                <div>
                  <h3>{product.productName}</h3>
                  <button onClick={() => removeFromCart(product.id)}>
                    <IoTrashOutline />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div>
             <Link to="/betalning"><button className="loanBtn">Låna</button></Link>
            <Link to="/"><button>Leta efter annan produkt</button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
