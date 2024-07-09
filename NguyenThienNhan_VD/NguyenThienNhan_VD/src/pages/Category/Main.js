import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
const Main = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams(); // Lấy id từ URL
  const [categoryName, setCategoryName] = useState("");
  // Phân trang
  const productsPerPage = 6; // Số sản phẩm mỗi trang
  const [pageNumber, setPageNumber] = useState(0);
  useEffect(() => {
    // Gọi API và lấy danh sách sản phẩm khi component được mount
    fetchProductsByCategoryId(id);
    fetchCategoryName(id);
  }, [id]);
  const [addedProducts, setAddedProducts] = useState([]); // Danh sách các sản phẩm đã được thêm vào giỏ hàng
  // Phân trang
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  // Tính toán chỉ mục bắt đầu và kết thúc của danh sách sản phẩm trên trang hiện tại
  const pageCount = Math.ceil(products.length / productsPerPage);
  const startIndex = pageNumber * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, products.length);
  //
  const isProductAdded = (productId) => {
    return addedProducts.some((product) => product.productId === productId);
  };
  const fetchProductsByCategoryId = async (categoryId) => {
    try {
      const response = await fetch(
        `https://localhost:7255/api/Product/GetProductsByCategory?categoryId=${categoryId}`
      );
      if (response.ok) {
        const data = await response.json();
        setProducts(data); // Lưu danh sách sản phẩm vào state
      } else {
        throw new Error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const fetchCategoryName = async (categoryId) => {
    try {
      const response = await fetch(
        `https://localhost:7255/api/Category/GetCategory?id=${categoryId}`
      );
      if (response.ok) {
        const data = await response.json();
        setCategoryName(data.name); // Lưu tên của category vào state
      } else {
        throw new Error("Failed to fetch category name");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const addToCart = async (productId) => {
    try {
      const userDataString = localStorage.getItem("userData");
      if (!userDataString) {
        console.error("User data not found in localStorage");
        return;
      }
      const userData = JSON.parse(userDataString);
      const { orderId, userId } = userData;

      // Lấy thông tin sản phẩm từ API
      const productResponse = await axios.get(
        `https://localhost:7255/api/Product/GetProduct?id=${productId}`
      );
      const productData = productResponse.data;

      // Thêm sản phẩm vào giỏ hàng
      await axios.post(
        `https://localhost:7255/api/Cart/AddToCart?userId=${userId}`,
        {
          orderId,
          productId,
          productTitle: productData.productTitle,
          imageUrl: productData.imageUrl,
          price: productData.price,
          quantity: 1, // Quantity mặc định là 1
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Cập nhật danh sách sản phẩm đã thêm vào giỏ hàng
      setAddedProducts([...addedProducts, { productId }]);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <>
      <section class="section-content padding-y">
        <div class="container">
          <h2>
            {categoryName}
          </h2>
          <nav class="row">
            {products.slice(startIndex, endIndex).map((product) => (
              <div
              class="col-xl-2 col-lg-3 col-md-4 col-6"
              key={product.id}
            >
              <div href="#" class="card card-sm card-product-grid">
                <a href={`/productdetail/${product.productId}`}  className="img-wrap">
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
          </nav>
        </div>
      </section>
    </>
  );
};
export default Main;
