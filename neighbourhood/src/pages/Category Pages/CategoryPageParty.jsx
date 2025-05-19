import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { TiStar } from "react-icons/ti";
import BackBtn from '../../components/BackBtn';

function CategoryPageParty() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch('/products.json')
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(product => product.productCat.toLowerCase() === "party");
      setProducts(filtered);
    })
    .catch(error => console.error('Fel vid hämtning', error));
}, []);

 return (
    <article className='wrapper'>
      <ul className='ProductList'>
          <BackBtn />
        <h2>Allt inom party</h2>
        {products.map(product => (
          <li key={product.id} className='productsList'>
            <Link to={`/produkt/${product.id}`} className='link'>
              <img src={product.productImg} alt={product.productDes} className='prodImg'/>
              <div className='APItitlePlacing'>
                <div className='prodTitle'>
                  <h3 className='APIh3'>{product.productName}</h3>
                  <p className='prodP'>Uthyrd av: <img src={product.renterImg} alt="bild på säljare" className='prodRenterImg'/>{product.productRenter}</p>
                </div>
                <div className='rating'>
                  <p className='ratingP'><TiStar className='star' />{product.productRating} {product.productAmountRating}</p>
                  <p className='ratingP'>{product.productDistance}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CategoryPageParty;