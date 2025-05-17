import React, { useEffect, useState } from 'react';
import { TiStar } from "react-icons/ti";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
       fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Fel vid hämtning:', error));
  }, []);

  return (
    <article>
      <ul className='APIList'>
        {products.map(product => 
          <li key={product.id} className='APIproduct'>
                <img src={product.productImg} alt={product.productDes} />
                <div className='APItitlePlacing'>
                <div>
            <h3 className='APIh3'>{product.productName}</h3>
            <p className='APIp'>{product.productRenter}</p>
            </div>
            <div className='rating'>
            <p className='ratingP'><TiStar className='star'/>{product.productRating} {product.productAmountRating}</p>
            </div>
            </div>
          </li>
        )}
      </ul>
    </article>
  );
}

export default ProductList;