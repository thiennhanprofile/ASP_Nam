import React, { useEffect, useState } from "react";
import axios from "axios";

const Items = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7255/api/Product/GetProducts"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="product-container">
      <div className="container">
        <div className="product-main">
          <h2 className="title">TẤT CẢ SẢN PHẨM </h2>

          <div className="product-grid">
            {products.map((product) => (
              <div className="showcase" key={product.productId}>

              
                <div className="showcase-banner">
                <a href={`/productdetail/${product.productId}`}>
                  <img
                  
                    src={require(`../../assets/images/products/${product.imageUrl}`)}
                    alt={product.productTitle}
                    width="300"
                    className="product-img default"
                  />
                  <img
                    src={require(`../../assets/images/products/${product.imageUrl}`)}
                    alt={product.productTitle}
                    width="300"
                    className="product-img hover"
                  />
                  </a>

                  <p className="showcase-badge">NEW</p>
                </div>

                <div className="showcase-content">
                  <a href="#q" className="showcase-category">
                    {product.productTitle}
                  </a>
                  {/* <a className="showcase-title">Mens Winter Leathers Jackets</a> */}

                  <div className="price-box">
                    <p className="price">${product.price}</p>
                    {/* <del>$75.00</del> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
