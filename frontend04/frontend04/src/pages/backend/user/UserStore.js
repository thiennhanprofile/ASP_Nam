import React, { useState } from "react";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../../layouts/backend/Header";

const UserStore = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: false,
  });

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
      const response = await axios.post(
        "https://localhost:7255/api/Users/AddUser",
        user
      );
      if (response.status === 200) {
        alert("User added successfully");
        // Nếu cần chuyển hướng sau khi thêm thành công, sử dụng thư viện react-router-dom
        // history.push("/user_index.html");
      }
    } catch (error) {
      console.error("Error adding user:", error);
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
                    <h3 className="d-inline">Thêm mới thành viên</h3>
                  </div>
                </div>
              </div>
            </section>
            <section className="content p-3">
              <div className="card">
                <div className="card-header text-end">
                  <Link to="/admin/user/index" className="btn btn-sm btn-info">
                    <FaArrowLeft /> Về danh sách
                  </Link>
                  <button
                    className="btn btn-sm btn-success"
                    name="SAVESTORE"
                    onClick={handleSubmit}
                  >
                    <FaSave /> Thêm thành viên
                  </button>
                </div>
                <div className="card-body">
                  <div className="row">
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
                        <strong>Mật khẩu</strong>
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={user.password}
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

export default UserStore;
