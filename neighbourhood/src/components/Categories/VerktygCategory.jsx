import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { TiStar } from "react-icons/ti";

function VerktygCategory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch('/products.json')
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(product => product.productCat.toLowerCase() === "verktyg");
      setProducts(filtered);
    })
    .catch(error => console.error('Fel vid hämtning', error));
}, []);

 return (
    <article className='wrapper'>
      <ul className='APIList'>
        {products.map(product => (
          <li key={product.id} className='APIproduct'>
            <Link to={`/produkt/${product.id}`} className='link'>
              <img src={product.productImg} alt={product.productDes} className='prodImg'/>
              <div className='APItitlePlacing'>
                <div className='prodTitle'>
                  <h3 className='APIh3'>{product.productName}</h3>
                  <p className='prodP'>Uthyrd av:{product.productRenter}</p>
                </div>
                <div className='rating'>
                  <p className='ratingP'><TiStar className='star' />{product.productRating} {product.productAmountRating}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default VerktygCategory;