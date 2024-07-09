import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Detail from "./Detail";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Description from "./Description";

function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7255/api/Product/GetProduct?id=${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <Header />
      <div>{product ? <Detail product={product} /> : <p>Loading...</p>}</div>
      <Description/>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
