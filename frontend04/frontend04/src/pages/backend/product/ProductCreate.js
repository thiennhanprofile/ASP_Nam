import React, { useState } from "react";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Header from "../../../layouts/backend/Header";

const ProductCreate = () => {
  const [productTitle, setProductTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("imageFile", imageFile);

      // Gọi API UploadImage để tải lên hình ảnh
      const response = await axios.post(
        "https://localhost:7255/api/Product/UploadImage",
        formData
      );
      if (!response.data.success) {
        toast.error("Failed to upload image");
        return;
      }
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://localhost:7255/api/Product/AddProduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productTitle,
            categoryId,
            brandId,
            imageUrl,
            price,
            quantity,
          }),
        }
      );
      if (response.ok) {
        // User registered successfully
        setError("");
        alert("User registered successfully");
      } else {
        const data = await response.json();
        setError(data);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong");
    }
  };
  const handleSaveProduct = async (e) => {
    // e.preventDefault(); // Ngăn chặn hành vi mặc định của trình duyệt (tải lại trang)

    await handleImageUpload();
    await handleSubmit();

    // Nếu cần, bạn có thể thực hiện các tác vụ khác sau khi lưu sản phẩm
  };

  return (
    <>
      <Header />
      <main id="main" className="main">
        <section className="section dashboard">
          <div className="row">
            <form>
              <div className="content">
                <section className="content-header my-2">
                  <h1 className="d-inline">Thêm sản phẩm</h1>
                  <div className="mt-1 text-end">
                    <Link
                      to="/admin/product"
                      className="btn btn-sm btn-info mx-1"
                    >
                      <FaArrowLeft /> Về danh sách
                    </Link>
                    <button
                      onClick={(e) => handleSaveProduct(e)} // Gọi hàm handleSaveProduct với tham số e khi người dùng nhấn nút
                      className="btn btn-sm btn-success"
                    >
                      <FaSave /> Lưu sản phẩm
                    </button>
                    <button
                      onClick={handleImageUpload}
                      className="btn btn-sm btn-success"
                    >
                      <FaSave /> Lưu hình ảnh
                    </button>
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
                          value={productTitle}
                          onChange={(e) => setProductTitle(e.target.value)}
                          placeholder="Nhập tên sản phẩm"
                          className="form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label>
                          <strong>Số lượng</strong>
                        </label>
                        <textarea
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                          <strong>Danh mục(*)</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                          <div className="mb-3">
                            <textarea
                              value={categoryId}
                              onChange={(e) => setCategoryId(e.target.value)}
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom">
                          <strong>Thương hiệu(*)</strong>
                        </div>
                        <div className="box-body p-2 border-bottom">
                          <div className="mb-3">
                            <textarea
                              value={brandId}
                              onChange={(e) => setBrandId(e.target.value)}
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom"></div>
                        <div className="box-body p-2 border-bottom">
                          <div className="mb-3">
                            <label>
                              <strong>Giá bán (*)</strong>
                            </label>
                            <input
                              type="number"
                              min="10000"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="box-container mt-2 bg-white">
                        <div className="box-header py-1 px-2 border-bottom"></div>
                        <div className="box-body p-2 border-bottom">
                          <div className="mb-3">
                            <label>
                              <strong>Hình ảnh</strong>
                            </label>
                            <input
                              type="text"
                              value={imageUrl}
                              onChange={(e) => setImageUrl(e.target.value)}
                              className="form-control"
                            />
                          </div>
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

export default ProductCreate;
