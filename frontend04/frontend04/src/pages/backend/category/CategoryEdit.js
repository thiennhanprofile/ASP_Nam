import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Header from "../../../layouts/backend/Header";

const CategoryEdit = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({
    name: "",
    avartar: "",
    slug: "",
    showOnHomePage: "",
    displayOrder: "",
    deleted: "",
    createOnUtc: "",
    updatedOnUtc: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7255/api/Category/GetCategory?id=${id}`
        );
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "https://localhost:7255/api/Category/UpdateCategory",
        {
          categoryID: id,
          ...category,
        }
      );
      if (response.status === 200) {
        toast.success("Category updated successfully");
      }
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("Error updating category");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
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
                <h1 className="d-inline">Cập nhật danh mục</h1>
                <div className="mt-1 text-end">
                  <Link
                    to="/admin/category/index"
                    className="btn btn-sm btn-info mx-1"
                  >
                    <FaArrowLeft /> Về danh sách
                  </Link>
                  <button type="submit" className="btn btn-sm btn-success">
                    {isLoading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <FaSave />
                    )}{" "}
                    Lưu
                  </button>
                </div>
              </section>
              <section className="content-body my-2">
                <div className="row">
                  <div className="col-md-9">
                    <div className="mb-3">
                      <label>
                        <strong>Tên danh mục (*)</strong>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={category.name}
                        onChange={handleChange}
                        placeholder="Nhập tên danh mục"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label>
                        <strong>Slug</strong>
                      </label>
                      <input
                        type="text"
                        name="slug"
                        value={category.slug}
                        onChange={handleChange}
                        placeholder="Slug"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label>
                        <strong>Mô tả</strong>
                      </label>
                      <textarea
                        name="description"
                        value={category.description}
                        onChange={handleChange}
                        placeholder="Mô tả"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label>
                        <strong>Hiển thị trên trang chủ</strong>
                      </label>
                      <select
                        name="showOnHomePage"
                        value={category.showOnHomePage}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="">-- Chọn --</option>
                        <option value="true">Có</option>
                        <option value="false">Không</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label>
                        <strong>Thứ tự hiển thị</strong>
                      </label>
                      <input
                        type="number"
                        name="displayOrder"
                        value={category.displayOrder}
                        onChange={handleChange}
                        placeholder="Thứ tự hiển thị"
                        className="form-control"
                      />
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

export default CategoryEdit;
