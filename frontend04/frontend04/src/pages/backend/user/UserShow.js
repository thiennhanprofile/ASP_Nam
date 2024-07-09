import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../layouts/backend/Header";

const UserShow = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  useEffect(() => {
    // Gọi API để lấy thông tin user theo id và cập nhật state
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://localhost:7255/api/Users/GetUser?id=${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://localhost:7255/api/Users/UpdateUser`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update user");
      }
      // Xử lý thành công
    } catch (error) {
      console.error("Error updating user:", error);
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
                    <h3 className="d-inline">Thông tin thành viên</h3>
                  </div>
                </div>
              </div>
            </section>
            <section className="content p-3">
              <div className="card">
                <div className="card-header text-end">
                  <a href="/admin/user/index" className="btn btn-sm btn-info">
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    Về danh sách
                  </a>
                  
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label>
                          <strong>Họ</strong>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={user.firstName}
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label>
                          <strong>Tên</strong>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={user.lastName}
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label>
                          <strong>Email</strong>
                        </label>
                        <input
                          type="text"
                          name="email"
                          value={user.email}
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label>
                          <strong>Mật khẩu</strong>
                        </label>
                        <input
                          type="text"
                          name="password"
                          value={user.password}
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      {/* Tiếp tục thêm các trường còn lại của User */}
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

export default UserShow;
