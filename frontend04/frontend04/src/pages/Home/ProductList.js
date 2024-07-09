import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7255/api/Product/GetProducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {/* <ul>
        {products.map(product => (
          <li key={product.productId}>
            {product.productTitle} - ${product.price}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default ProductList;
