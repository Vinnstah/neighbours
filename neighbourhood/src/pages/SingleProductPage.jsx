import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RiMapPinLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
    <article className="wrapper">
      <div className='singleProduct'>
        <div className='productDiv'>
      <Link to="/" className='link'>
      <p className='productLink'><IoIosArrowRoundBack className='backArrow'/>
      Tillbaka
      </p>
      </Link>
      </div>
      <img src={product.productImg} alt={product.productDes} className='productImg'/>
      <h2>{product.productName}</h2>
      <p>{product.productDes}</p>
      <button className='loanBtn'>Låna</button>
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
