import { useEffect, useState } from "react";
// import ProductService from "../../../services/ProductService";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaEdit,
  FaEye,
  FaToggleOff,
  FaToggleOn,
  FaTrashAlt,
} from "react-icons/fa";
// import { urlImage } from "../../../config";
import { toast } from "react-toastify";
import Header from "../../../layouts/backend/Header";
import { Button } from "react-bootstrap";

const ProductIndex = () => {
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

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `https://localhost:7255/api/Product/DeleteProduct?id=${productId}`
      );
      if (response.status === 200) {
        setProducts(
          products.filter((product) => product.productId !== productId)
        );
        toast.success("Product deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product");
    }
  };
  return (
    <>
    <Header/>
    <main id="main" className="main">
      <section className="section dashboard">
        <div className="row">
          <div className="content">
            <section className="content-header my-2">
              <h1 className="d-inline">Tất cả sản phẩm</h1>
                
              <Link to="/admin/product/create" className="btn-add">
                Thêm mới
              </Link>
              
            </section>
            <section className="content-body my-2">
              <table className="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th style={{ width: "30px" }} className="text-center">
                      #
                    </th>
                    <th className="text-center" style={{ width: "130px" }}>
                      Hình ảnh
                    </th>
                    <th>Tên sản phẩm</th>
                    <th>Danh mục</th>
                    <th>Thương hiệu</th>
                    <th style={{ width: "30px" }} className="text-center">
                      Id
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.productId} className="dataitem">
                      <td className="text-center align-middle">
                        <input type="checkbox" name="id[]" />
                      </td>
                      <td>
                        <img
                          src={require(`../../../assets/images/product/${product.imageUrl}`)}
                          className="img-fluid"
                          alt="Hinh"
                        />
                      </td>
                      <td>
                        <div className="name">
                          <Link to={`/admin/product/edit/${product.productId}`}>
                            {product.productTitle}
                          </Link>
                        </div>
                        <div className="function_style">
                          {/* <button
                            onClick={() => handleStatus(product.id)}
                            className={
                              product.status === 1
                                ? "border-0 px-1 text-success"
                                : "border-0 px-1 text-danger"
                            }
                          >
                            {product.status === 1 ? (
                              <FaToggleOn />
                            ) : (
                              <FaToggleOff />
                            )}
                          </button> */}
                          <Link to="#" className="px-1 text-success"></Link>
                          <Link
                            to={`/admin/product/edit/${product.productId}`}
                            className="px-1 text-primary"
                          >
                            <FaEdit />
                          </Link>
                          <Link
                            to={`/admin/product/show/${product.productId}`}
                            className="px-1 text-info"
                          >
                            <FaEye />
                          </Link>
                          <button
                            onClick={() => handleDelete(product.productId)}
                            className="border-0 px-1 text-danger"
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                      </td>
                      <td>{product.categoryId}</td>
                      <td>{product.brandId}</td>
                      <td className="text-center align-middle">
                        {product.productId}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default ProductIndex;
