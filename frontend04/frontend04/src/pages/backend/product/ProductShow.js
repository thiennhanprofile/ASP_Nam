import { FaArrowLeft, FaSave } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../../../layouts/backend/Header";

const ProductShow = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    productTitle: "",
    categoryId: "",
    brandId: "",
    price: "",
    quantity: "",
    imageUrl: "",
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "https://localhost:7255/api/Product/UpdateProduct",
        {
          productId: id,
          ...product,
        }
      );
      if (response.status === 200) {
        toast.success("Product updated successfully");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Error updating product");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <>
    <Header/>
    <main id="main" className="main">
      <section className="section dashboard">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="content">
              <section className="content-header my-2">
                <h1 className="d-inline">Chi tiết sản phẩm</h1>
                <div className="mt-1 text-end">
                  <Link
                    to="/admin/product"
                    className="btn btn-sm btn-info mx-1"
                  >
                    <FaArrowLeft /> Về danh sách
                  </Link>
                  
                </div>
              </section>
              <section className="content-body my-2">
                <div className="row">
                  <div className="col-md-9">
                    <div className="mb-3">
                      <label>
                        <strong>Tên sản phẩm (*)</strong>
                      </label>
                      <input
                        type="text"
                        name="productTitle"
                        value={product.productTitle}
                        onChange={handleChange}
                        placeholder="Nhập tên sản phẩm"
                        className="form-control"
                      />
                    </div>
                    {/* <div className="mb-3">
                      <label>
                        <strong>Số lượng (*)</strong>
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleChange}
                        placeholder="Nhập số lượng"
                        className="form-control"
                      />
                    </div> */}
                    <div className="box-container mt-2 bg-white">
                      <div className="box-header py-1 px-2 border-bottom">
                        <strong>Danh mục (*)</strong>
                      </div>
                      <div className="box-body p-2 border-bottom">
                        <textarea
                          name="categoryId"
                          value={product.categoryId}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="box-container mt-2 bg-white">
                      <div className="box-header py-1 px-2 border-bottom">
                        <strong>Thương hiệu (*)</strong>
                      </div>
                      <div className="box-body p-2 border-bottom">
                        <textarea
                          name="brandId"
                          value={product.brandId}
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="box-container mt-2 bg-white">
                      
                      <div className="box-body p-2 border-bottom">
                        <div className="mb-3">
                          <label>
                            <strong>Giá bán (*)</strong>
                          </label>
                          <input
                            type="number"
                            min="10000"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="box-container mt-2 bg-white">
                    <div className="box-body p-2 border-bottom">
    {/* <input
      type="text"
      name="imageUrl"
      value={product.imageUrl}
      onChange={handleChange}
      className="form-control"
    /> */}
    {product.imageUrl && (
      <img
        src={require(`../../../assets/images/product/${product.imageUrl}`)} // Đường dẫn đến hình ảnh được cung cấp từ state
        className="img-fluid mt-2" // Thêm các lớp CSS cần thiết cho hình ảnh
      />
    )}
  </div>
                      
                      
                      
                    </div>
                  </div>
                </div>
              </section>
              
            </div>
          </form>
        </div>
      </section>
    </main>
    </>
  );
};

export default ProductShow;
