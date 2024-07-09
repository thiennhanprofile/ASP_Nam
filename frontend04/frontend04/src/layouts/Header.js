import { useEffect, useState } from "react";
import React from "react";
import { Dropdown } from "react-bootstrap";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [categories, setCategories] = useState([]);
  // Category
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://localhost:7255/api/Product/GetAllCategories"
      );
      if (response.ok) {
        const data = await response.json();
        setCategories(data); // Lưu danh sách categories vào state
      } else {
        throw new Error("Failed to fetch categories");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Đăng kí đăng nhập
  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập hay không
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setIsLoggedIn(true);
      setUserData(userData);
    }
  }, []);

  const handleLogout = () => {
    // Xóa thông tin người dùng từ localStorage và đặt trạng thái loggedIn thành false
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUserData(null);
  };
  return (
    <>
      <header class="section-header">
        <section class="header-main border-bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-3 col-md-12">
                <a href="/" class="brand-wrap">
                  <img
                    class="logo"
                    src={require("../assets/images/logo.png")}
                  />
                </a>
              </div>
              <div class="col-xl-6 col-lg-5 col-md-6">
                <form action="#" class="search-header">
                  <div class="input-group w-100">
                    <select
                      class="custom-select border-right"
                      name="category_name"
                    >
                      <option value="">All type</option>
                      <option value="codex">Special</option>
                      <option value="comments">Only best</option>
                      <option value="content">Latest</option>
                    </select>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />

                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit">
                        <i class="fa fa-search"></i> Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6">
                <div class="widgets-wrap float-md-right">
                  <div class="widget-header mr-3">
                  <li>
                      {isLoggedIn ? (
                        <a class="widget-view" onClick={handleLogout}>
                          <div class="icon-area">
                            <i class="fa fa-user"></i>
                            <span class="notify">3</span>
                          </div>
                          <small class="text"> Đăng xuất </small>
                        </a>
                      ) : (
                        <a class="widget-view" href={`/login`}>
                          <div class="icon-area">
                            <i class="fa fa-user"></i>
                            <span class="notify">3</span>
                          </div>
                          <small class="text">Đăng nhập </small>
                        </a>
                      )}
                    </li>
                  </div>
                  <div class="widget-header mr-3">
                    <a href="#" class="widget-view">
                      <div class="icon-area">
                        <i class="fa fa-comment-dots"></i>
                        <span class="notify">1</span>
                      </div>
                      <small class="text"> Message </small>
                    </a>
                  </div>
                  <div class="widget-header mr-3">
                    <a href="#" class="widget-view">
                      <div class="icon-area">
                        <i class="fa fa-store"></i>
                      </div>
                      <small class="text"> Orders </small>
                    </a>
                  </div>
                  <div class="widget-header">
                    <a href="#" class="widget-view">
                      <div class="icon-area">
                        <i class="fa fa-shopping-cart"></i>
                      </div>
                      <small class="text"> Cart </small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <nav class="navbar navbar-main navbar-expand-lg border-bottom">
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav"
              aria-controls="main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="main_nav">
              <ul class="navbar-nav">
                <Dropdown
                  className="list-category"
                  style={{ marginTop: "10px", color: "white" }}
                >
                  <Dropdown.Toggle variant="custom" id="dropdown-basic">
                    Danh mục sản phẩm
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {categories.map((category) => (
                      <Dropdown.Item
                        className="menu-item-has-children"
                        key={category.categoryID}
                        href={`/category/${category.categoryID}`}
                      >
                        {category.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Danh mục
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Trade shows
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Sell with us
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Demo pages
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="page-index.html">
                      Main
                    </a>
                    <a class="dropdown-item" href="page-category.html">
                      All category
                    </a>
                    <a class="dropdown-item" href="page-listing-large.html">
                      Listing list
                    </a>
                    <a class="dropdown-item" href="page-listing-grid.html">
                      Listing grid
                    </a>
                    <a class="dropdown-item" href="page-shopping-cart.html">
                      Shopping cart
                    </a>
                    <a class="dropdown-item" href="page-detail-product.html">
                      Item detail
                    </a>
                    <a class="dropdown-item" href="page-content.html">
                      Info content
                    </a>
                    <a class="dropdown-item" href="page-user-login.html">
                      Page login
                    </a>
                    <a class="dropdown-item" href="page-user-register.html">
                      Page register
                    </a>
                    <a class="dropdown-item disabled text-muted" href="#">
                      More components
                    </a>
                  </div>
                </li>
              </ul>
              <ul class="navbar-nav ml-md-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Get the app
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="http://example.com"
                    data-toggle="dropdown"
                  >
                    English
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">
                      Russian
                    </a>
                    <a class="dropdown-item" href="#">
                      French
                    </a>
                    <a class="dropdown-item" href="#">
                      Spanish
                    </a>
                    <a class="dropdown-item" href="#">
                      Chinese
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
