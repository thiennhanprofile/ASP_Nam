import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { urlImage } from "../../../config";
import {
  FaEdit,
  FaTrash,
  FaToggleOn,
  FaEye,
  FaToggleOff,
  FaTrashAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios"; // Thêm import này
import Header from "../../../layouts/backend/Header";

const CategoryIndex = () => {
  const [name, setName] = useState("");
  const [avartar, setAvartar] = useState("");
  const [slug, setslug] = useState("");
  const [showOnHomePage, setShowOnHomePage] = useState("");
  const [displayOrder, setdisplayOrder] = useState("");
  const [deleted, setDeleted] = useState(null);
  const [error, setError] = useState(null); // Thêm state để quản lý lỗi

  const [categories, setCategories] = useState([]); // Sửa tên biến từ `cateogry` thành `categories`
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7255/api/Category/GetCategories" // Sửa đường dẫn API
        );
        setCategories(response.data); // Sửa từ `setProducts` thành `setCategories`
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);
  const handleSubmit = async (event) => {
    const category = {
      name: name,
      avartar: avartar,
      slug: slug,
      showOnHomePage: showOnHomePage === "true", 
      displayOrder: displayOrder ? parseInt(displayOrder) : null, 
      deleted: null, 
    };

    try {
      const response = await axios.post(
        "https://localhost:7255/api/Category/AddCategory",
        category
      );

      if (response.status === 200) {
        setCategories([...categories, response.data]);
        toast.success("Category added successfully");
        setName("");
        setAvartar("");
        setslug("");
        setShowOnHomePage("");
        setdisplayOrder("");
      }
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("Error adding category");
    }
  };

  const handleDelete = async (categoryId) => {
    try {
      const response = await axios.delete(
        `https://localhost:7255/api/Category/DeleteCategory?id=${categoryId}`
      );
      if (response.status === 200) {
        // Cập nhật danh sách categories sau khi xóa thành công
        setCategories(
          categories.filter((category) => category.categoryId !== categoryId)
        );
        toast.success("Category deleted successfully");
        // Reload lại trang sau khi xóa thành công
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Error deleting category");
    }
  };

  return (
    <>
    <Header/>
    <main id="main" className="main">
      <section className="section dashboard">
        <div className="row">
          <div className="content-wrapper">
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-12">
                    <h3 className="d-inline">Tất cả danh mục</h3>
                  </div>
                </div>
              </div>
              <div className="row mt-3 align-items-center">
                <div className="col-6">
                  <ul className="manager">
                    <li>
                      <Link to="/admin/category/index"></Link>
                    </li>
                    <li></li>
                  </ul>
                </div>
                <div className="col-6 text-end">
                  <input type="text" className="search d-inline" />
                  <button className="d-inline btnsearch">Tìm kiếm</button>
                </div>
              </div>
            </section>
            <section className="content p-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label>
                            <strong>Tên danh mục</strong>
                          </label>
                          <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            name="name"
                            className="form-control"
                            required
                            placeholder="Tên danh mục"
                          />
                        </div>
                        <div className="mb-3">
                          <label>
                            <strong>Ảnh đại diện</strong>
                          </label>
                          <input
                            type="text"
                            onChange={(e) => setAvartar(e.target.value)}
                            value={avartar}
                            name="avartar"
                            className="form-control"
                            placeholder="URL ảnh đại diện"
                          />
                        </div>
                        <div className="mb-3">
                          <label>
                            <strong>Link</strong>
                          </label>
                          <input
                            type="text"
                            onChange={(e) => setslug(e.target.value)}
                            value={slug}
                            name="slug"
                            className="form-control"
                            required
                            placeholder="Slug"
                          />
                        </div>
                        <div className="mb-3">
                          <label>
                            <strong>Hiển thị trên trang chủ</strong>
                          </label>
                          <select
                            name="showOnHomePage"
                            onChange={(e) => setShowOnHomePage(e.target.value)}
                            value={showOnHomePage}
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
                            onChange={(e) => setdisplayOrder(e.target.value)}
                            value={displayOrder}
                            name="displayOrder"
                            className="form-control"
                            placeholder="Thứ tự hiển thị"
                          />
                        </div>

                        <div className="mb-3 text-end">
                          <button
                            type="submit"
                            className="btn btn-success btn-sm"
                            name="THEM"
                          >
                            <i className="fa fa-save"></i> Lưu[Thêm]
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-8">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th
                              className="text-center"
                              style={{ width: "30px" }}
                            >
                              <input type="checkbox" />
                            </th>
                            <th
                              className="text-center"
                              style={{ width: "90px" }}
                            >
                              Hình ảnh
                            </th>
                            <th>Tên danh mục</th>
                            <th>Tên slug</th>
                            <th
                              className="text-center"
                              style={{ width: "30px" }}
                            >
                              ID
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Duyệt và hiển thị danh sách danh mục */}
                          {categories &&
                            categories.map((category, index) => (
                              <tr className="datarow" key={index}>
                                <td className="text-center"></td>
                                <td className="text-center">
                                  <img
                                    className="img-fluid"
                                    src={
                                      category.image
                                        ? urlImage +
                                          "category/" +
                                          category.image
                                        : ""
                                    }
                                    alt={category.image || ""}
                                  />
                                </td>
                                <td>
                                  <div className="name">
                                    <Link
                                      to={`/admin/category/edit/${category.categoryID}`}
                                    >
                                      {category.name}
                                    </Link>
                                  </div>
                                  <div className="function_style">
                                    <Link
                                      to="#"
                                      className="px-1 text-success"
                                    ></Link>
                                    <Link
                                      to={`/admin/category/edit/${category.categoryID}`}
                                      className="px-1 text-primary"
                                    >
                                      <FaEdit />
                                    </Link>
                                    <Link
                                      to={`/admin/category/show/${category.categoryID}`}
                                      className="px-1 text-info"
                                    >
                                      <FaEye />
                                    </Link>
                                    <button
                                      onClick={() =>
                                        handleDelete(category.categoryID)
                                      }
                                      className="border-0 px-1 text-danger"
                                    >
                                      <FaTrashAlt />
                                    </button>
                                  </div>
                                </td>
                                <td>{category.slug}</td>
                                <td className="text-center">
                                  {category.categoryID}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default CategoryIndex;
