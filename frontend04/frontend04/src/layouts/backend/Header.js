import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
const Header = () => {
  return (
    <section className="header">
      <div className="container-fluid" class="col-md-12">
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/admin">
              Trang chủ
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sản phẩm
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/admin/product">
                        Tất cả sản phẩm
                      </Link>
                    </li>
                  </ul>

                    
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/product">
                    Sản phẩm
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/category/index">
                    Danh mục
                  </Link>
                </li>

                
              
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/brand/index">
                    Thương hiệu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/user/index">
                    Người dùng
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/admin/contact">
                    Liên hệ
                  </Link>
                </li> */}
                {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Giao diện
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/admin/menu">
                        Menu
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/admin/slider">
                        Slider
                      </Link>
                    </li>
                    <li></li>
                  </ul>
                </li> */}

                {/* <li className="nav-item">
                  <Link className="nav-link" to="/admin/user">
                    Thành viên
                  </Link>
                </li> */}
              </ul>
              <ul>
                <li>hhh</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
