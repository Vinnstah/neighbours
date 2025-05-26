import React, { useEffect, useState } from 'react';
import { RiMapPinLine } from "react-icons/ri";
import BackBtn from '../components/BackBtn';
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from 'react';

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();


  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        const foundProduct = data.find(p => p.id === id);
        setProduct(foundProduct);
      })
      .catch(error => console.error('Fel vid hämtning:', error));
  }, [id]);

  if (!product) {
    return <p>Laddar in produkt</p>;
  }

  const handleBuyClick = () => {
  const productInCart = cart.find((p) => p.id === product.id);

  if (!productInCart) {
    const newProduct = { ...product, itemCount: 1 };
    addToCart(newProduct);
  } else {
    const cartCopy = cart.map(item =>
      item.id === product.id
        ? { ...item, itemCount: item.itemCount + 1 }
        : item
    );
    setCart(cartCopy);
  }

  navigate("/varukorg");
};

  return (
    <article className="wrapper">
      <div className='singleProduct'>
        <div className='productDiv'>
      <BackBtn />
      </div>
      <img src={product.productImg} alt={product.productDes} className='productImg'/>
      <h2>{product.productName}</h2>
      <p>{product.productDes}</p>
      <button className='loanBtn' onClick={handleBuyClick}>Låna</button>
      <h3>Lånas ut av</h3>
      <div className='rentDiv'>
      <img src={product.renterImg} alt="bild på säljare" className='renterImg'/>
      <p>{product.productRenter}</p>
      </div>
      <p>{product.productRenter} har lånat ut <strong>{product.renterAmount}</strong> gånger</p>
      <h3><RiMapPinLine />Avstånd</h3>
      <p>{product.productDistance}</p>
      <h3>Recenssioner av lånare</h3>
      <p>{product.productRating} {product.productAmountRating}</p>
      </div>
    </article>
  );
};

export default SingleProductPage;
