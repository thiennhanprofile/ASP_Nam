import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaEdit,
  FaTrash,
  FaToggleOn,
  FaEye,
  FaToggleOff,
} from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import Header from "../../../layouts/backend/Header";

const BrandIndex = () => {
  const [brands, setBrands] = useState([]);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [slug, setSlug] = useState("");
  const [showOnHomePage, setShowOnHomePage] = useState(null);
  const [displayOrder, setDisplayOrder] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7255/api/Brand/GetBrands"
        );
        setBrands(response.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (brandId) => {
    try {
      const response = await axios.delete(
        `https://localhost:7255/api/Brand/DeleteBrand?id=${brandId}`
      );
      if (response.status === 200) {
        setBrands(brands.filter((brand) => brand.brandId !== brandId));
        toast.success("Brand deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting brand:", error);
      toast.error("Error deleting brand");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const brandData = {
      name: name,
      avatar: avatar,
      slug: slug,
      showOnHomePage: showOnHomePage,
      displayOrder: displayOrder ? parseInt(displayOrder) : null,
    };

    try {
      const response = await axios.post(
        "https://localhost:7255/api/Brand/AddBrand",
        brandData
      );
      if (response.status === 200) {
        setBrands([...brands, response.data]);
        toast.success("Brand added successfully");
        setName("");
        setAvatar("");
        setSlug("");
        setShowOnHomePage(null);
        setDisplayOrder("");
      }
    } catch (error) {
      console.error("Error adding brand:", error);
      toast.error("Error adding brand");
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
                    <h3 className="d-inline">Tất cả thương hiệu</h3>
                  </div>
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
                            <strong>Tên thương hiệu (*)</strong>
                          </label>
                          <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            name="name"
                            className="form-control"
                            required
                            placeholder="Tên thương hiệu"
                          />
                        </div>
                        {/* <div className="mb-3">
                          <label>
                            <strong>Ảnh đại diện</strong>
                          </label>
                          <input
                            type="text"
                            onChange={(e) => setAvatar(e.target.value)}
                            value={avatar}
                            name="avatar"
                            className="form-control"
                            placeholder="URL ảnh đại diện"
                          />
                        </div> */}
                        <div className="mb-3">
                          <label>
                            <strong>Slug (*)</strong>
                          </label>
                          <input
                            type="text"
                            onChange={(e) => setSlug(e.target.value)}
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
                            onChange={(e) =>
                              setShowOnHomePage(e.target.value === "true")
                            }
                            value={showOnHomePage ? "true" : "false"}
                            className="form-control"
                          >
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
                            onChange={(e) => setDisplayOrder(e.target.value)}
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
                            {/* <th
                              className="text-center"
                              style={{ width: "90px" }}
                            >
                              Hình ảnh
                            </th> */}
                            <th>Tên thương hiệu</th>
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
                          {brands &&
                            brands.map((brand, index) => (
                              <tr className="datarow" key={index}>
                                <td className="text-center"></td>
                                {/* <td className="text-center">
                                  <img
                                    className="img-fluid"
                                    src={
                                      brand.avatar
                                        ? urlImage + "brand/" + brand.avatar
                                        : ""
                                    }
                                    alt={brand.avatar || ""}
                                  />
                                </td> */}
                                <td>
                                  <div className="name">{brand.name}</div>
                                  <div className="function_style">
                                    <Link
                                      to="#"
                                      className="px-1 text-success"
                                    ></Link>
                                    <Link
                                      to={`/admin/brand/edit/${brand.brandId}`}
                                      className="px-1 text-primary"
                                    >
                                      <FaEdit />
                                    </Link>
                                    <Link
                                      to={`/admin/brand/show/${brand.brandId}`}
                                      className="px-1 text-info"
                                    >
                                      <FaEye />
                                    </Link>
                                    <button
                                      onClick={() =>
                                        handleDelete(brand.brandId)
                                      }
                                      className="border-0 px-1 text-danger"
                                    >
                                      <FaTrash />
                                    </button>
                                  </div>
                                </td>
                                <td>{brand.slug}</td>
                                <td className="text-center">{brand.brandId}</td>
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

export default BrandIndex;
