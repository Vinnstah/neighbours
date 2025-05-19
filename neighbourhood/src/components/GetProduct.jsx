import React, { useEffect, useState } from 'react';
import { TiStar } from "react-icons/ti";
import { Link } from "react-router-dom";

function GetProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Fel vid hämtning', error));
  }, []);

  return (
    <article>
      <ul className='ProductList'>
        {products.map(product => (
          <li key={product.id} className='productsList'>
            <Link to={`/produkt/${product.id}`} className='link'>
              <img src={product.productImg} alt={product.productDes} className='prodImg' />
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
}

export default GetProduct;
