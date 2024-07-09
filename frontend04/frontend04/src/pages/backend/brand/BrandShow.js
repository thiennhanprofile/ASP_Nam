import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import axios from "axios"; // Thêm import này
import { Link } from "react-router-dom";
import Header from "../../../layouts/backend/Header";
const BrandShow = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState({
    name: "",
    description: "",
    avatar: "",
    slug: "",
    sort_order: "",
    status: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7255/api/Brand/GetBrand?id=${id}`
        );
        setBrand(response.data);
      } catch (error) {
        console.error("Error fetching brand:", error);
      }
    };
    fetchBrand();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.put(
        "https://localhost:7255/api/Brand/UpdateBrand",
        brand
      );
      setIsLoading(false);
      console.log("Brand updated:", response.data);
      // Handle success, show toast or navigate to another page
    } catch (error) {
      console.error("Error updating brand:", error);
      setIsLoading(false);
      // Handle error, show toast or alert to the user
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrand((prevBrand) => ({
      ...prevBrand,
      [name]: value,
    }));
  };
  return (
    <>
    <Header/>
    <main id="main" className="main">
      <section className="section dashboard">
        <div className="row">
          <div className="content-wrapper">
            <section className="content-header">
              <Link
                to="/admin/brand/index"
                className="btn btn-sm btn-info mx-1"
              >
                <FaArrowLeft /> Về danh sách
              </Link>
            </section>
            <section className="content p-3">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    {/* Thêm các trường thông tin cần thiết khác */}
                    <div className="mb-3">
                      <label>
                        <strong>Tên danh thương hiệu (*)</strong>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={brand.name}
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
                        value={brand.slug}
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
                        value={brand.description}
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
                        value={brand.showOnHomePage}
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
                        value={brand.displayOrder}
                        onChange={handleChange}
                        placeholder="Thứ tự hiển thị"
                        className="form-control"
                      />
                    </div>
                    {/* Thêm các trường thông tin khác */}
                    <div className="mb-3 text-end">
                      
                    </div>
                  </form>
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

export default BrandShow;
