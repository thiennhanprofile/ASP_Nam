import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
const Item = () => {
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
    <>
      <section class="padding-bottom-sm">
        <header class="section-heading heading-line">
          <h4 class="title-section text-uppercase">ALL PRODUCT</h4>
        </header>
        <div class="row row-sm">
          {products.map((product) => (
            <div
              class="col-xl-2 col-lg-3 col-md-4 col-6"
              key={product.productId}
            >
              <div href="#" class="card card-sm card-product-grid">
                <a
                  href={`/productdetail/${product.productId}`}
                  className="img-wrap"
                >
                  <img
                    src={require(`../../assets/images/product/${product.imageUrl}`)}
                    alt={product.productTitle}
                  />
                </a>
                <figcaption class="info-wrap">
                  <a href="#" class="title">
                    {product.productTitle}
                  </a>
                  <div class="price mt-1">${product.price}</div>{" "}
                </figcaption>
              </div>
            </div>
          ))}
        </div>{" "}
        {/* row.// */}
      </section>
    </>
  );
};
export default Item;
