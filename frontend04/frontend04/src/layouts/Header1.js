import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../assets/sass/app.scss";
import "../index.css";
import "../style.css";
const Header1 = () => {
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
    <header>
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <Link href="#" className="social-link">
                <ion-icon
                  name="logo-facebook"
                  role="img"
                  className="md hydrated"
                  aria-label="logo facebook"
                />
              </Link>
            </li>
            <li>
              <Link href="#" className="social-link">
                <ion-icon
                  name="logo-twitter"
                  role="img"
                  className="md hydrated"
                  aria-label="logo twitter"
                />
              </Link>
            </li>
            <li>
              <Link href="#" className="social-link">
                <ion-icon
                  name="logo-instagram"
                  role="img"
                  className="md hydrated"
                  aria-label="logo instagram"
                />
              </Link>
            </li>
            <li>
              <Link href="#" className="social-link">
                <ion-icon
                  name="logo-linkedin"
                  role="img"
                  className="md hydrated"
                  aria-label="logo linkedin"
                />
              </Link>
            </li>
          </ul>
          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b>
              This Week Order Over - $55
            </p>
          </div>
          <div className="header-top-actions">
            <select name="currency">
              <option value="usd">USD $</option>
              <option value="eur">EUR €</option>
            </select>
            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <a href="/" className="header-logo">
            <img
              src={require("../assets/images/logo/logo.jpg")}
              alt="Anon's logo"
              width={120}
              height={36}
            />
          </a>
          <div className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field"
              placeholder="Enter your product name..."
            />
            <button className="search-btn">
              <ion-icon
                name="search-outline"
                role="img"
                className="md hydrated"
                aria-label="search outline"
              />
            </button>
          </div>
          <div className="header-user-actions">
            <li>
              {isLoggedIn ? (
                <button className="action-btn" onClick={handleLogout}>
                  <ion-icon
                    name="enter-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="enter outline"
                  />
                </button>
              ) : (
                <a href="/login" className="action-btn">
                  <button>
                    <ion-icon
                      name="person-outline"
                      role="img"
                      className="md hydrated"
                      aria-label="person outline"
                    />
                  </button>
                </a>
              )}
            </li>
            <button className="action-btn">
              <ion-icon
                name="heart-outline"
                role="img"
                className="md hydrated"
                aria-label="heart outline"
              />
              <span className="count">49</span>
            </button>
            <button className="action-btn">
              <ion-icon
                name="bag-handle-outline"
                role="img"
                className="md hydrated"
                aria-label="bag handle outline"
              />
              <span className="count">49</span>
            </button>
          </div>
        </div>
      </div>
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list ">
            <li className="menu-category ">
              <a href="/" className="menu-title">
                TRANG CHỦ
              </a>
            </li>
            <li className="menu-category">
              <Link href="#" className="menu-title">
                Categories
              </Link>
            </li>
            <li className="menu-category">
              <Link href="#" className="menu-title">
                DANH MỤC
              </Link>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  {categories.map((category) => (
                    <Dropdown.Item
                      className="dropdown-item"
                      key={category.categoryID}
                      href={`/category/${category.categoryID}`}
                    >
                      {category.name}
                    </Dropdown.Item>
                  ))}
                </li>
              </ul>
            </li>
            
          </ul>
        </div>
      </nav>
      <div className="mobile-bottom-navigation">
        <button className="action-btn" data-mobile-menu-open-btn>
          <ion-icon
            name="menu-outline"
            role="img"
            className="md hydrated"
            aria-label="menu outline"
          />
        </button>
        <button className="action-btn">
          <ion-icon
            name="bag-handle-outline"
            role="img"
            className="md hydrated"
            aria-label="bag handle outline"
          />
          <span className="count">0</span>
        </button>
        <button className="action-btn">
          <ion-icon
            name="home-outline"
            role="img"
            className="md hydrated"
            aria-label="home outline"
          />
        </button>
        <button className="action-btn">
          <ion-icon
            name="heart-outline"
            role="img"
            className="md hydrated"
            aria-label="heart outline"
          />
          <span className="count">0</span>
        </button>
        <button className="action-btn" data-mobile-menu-open-btn>
          <ion-icon
            name="grid-outline"
            role="img"
            className="md hydrated"
            aria-label="grid outline"
          />
        </button>
      </div>
      <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>
          <button className="menu-close-btn" data-mobile-menu-close-btn>
            <ion-icon
              name="close-outline"
              role="img"
              className="md hydrated"
              aria-label="close outline"
            />
          </button>
        </div>
        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <Link href="#" className="menu-title">
              Home
            </Link>
          </li>
          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Men's</p>
              <div>
                <ion-icon
                  name="add-outline"
                  className="add-icon md hydrated"
                  role="img"
                  aria-label="add outline"
                />
                <ion-icon
                  name="remove-outline"
                  className="remove-icon md hydrated"
                  role="img"
                  aria-label="remove outline"
                />
              </div>
            </button>
            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Shirt
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Shorts &amp; Jeans
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Safety Shoes
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Wallet
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Women's</p>
              <div>
                <ion-icon
                  name="add-outline"
                  className="add-icon md hydrated"
                  role="img"
                  aria-label="add outline"
                />
                <ion-icon
                  name="remove-outline"
                  className="remove-icon md hydrated"
                  role="img"
                  aria-label="remove outline"
                />
              </div>
            </button>
            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Dress &amp; Frock
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Earrings
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Necklace
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Makeup Kit
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Jewelry</p>
              <div>
                <ion-icon
                  name="add-outline"
                  className="add-icon md hydrated"
                  role="img"
                  aria-label="add outline"
                />
                <ion-icon
                  name="remove-outline"
                  className="remove-icon md hydrated"
                  role="img"
                  aria-label="remove outline"
                />
              </div>
            </button>
            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Earrings
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Couple Rings
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Necklace
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Bracelets
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Perfume</p>
              <div>
                <ion-icon
                  name="add-outline"
                  className="add-icon md hydrated"
                  role="img"
                  aria-label="add outline"
                />
                <ion-icon
                  name="remove-outline"
                  className="remove-icon md hydrated"
                  role="img"
                  aria-label="remove outline"
                />
              </div>
            </button>
            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Clothes Perfume
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Deodorant
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Flower Fragrance
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#" className="submenu-title">
                  Air Freshener
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <Link href="#" className="menu-title">
              Blog
            </Link>
          </li>
          <li className="menu-category">
            <Link href="#" className="menu-title">
              Hot Offers
            </Link>
          </li>
        </ul>
        <div className="menu-bottom">
          <ul className="menu-category-list">
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Language</p>
                <ion-icon
                  name="caret-back-outline"
                  className="caret-back md hydrated"
                  role="img"
                  aria-label="caret back outline"
                />
              </button>
              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <Link href="#" className="submenu-title">
                    English
                  </Link>
                </li>
                <li className="submenu-category">
                  <Link href="#" className="submenu-title">
                    Español
                  </Link>
                </li>
                <li className="submenu-category">
                  <Link href="#" className="submenu-title">
                    Frençh
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Currency</p>
                <ion-icon
                  name="caret-back-outline"
                  className="caret-back md hydrated"
                  role="img"
                  aria-label="caret back outline"
                />
              </button>
              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <Link href="#" className="submenu-title">
                    USD $
                  </Link>
                </li>
                <li className="submenu-category">
                  <Link href="#" className="submenu-title">
                    EUR €
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="menu-social-container">
            <li>
              <Link href="#" className="social-link">
                <ion-icon
                  name="logo-facebook"
                  role="img"
                  className="md hydrated"
                  aria-label="logo facebook"
                />
              </Link>
            </li>
            <li>
              <Link href="#" className="social-link">
                <ion-icon
                  name="logo-twitter"
                  role="img"
                  className="md hydrated"
                  aria-label="logo twitter"
                />
              </Link>
            </li>
            <li>
              <Link href="#" className="social-link">
                <ion-icon
                  name="logo-instagram"
                  role="img"
                  className="md hydrated"
                  aria-label="logo instagram"
                />
              </Link>
            </li>
            <li>
              <Link href="#" className="social-link">
                <ion-icon
                  name="logo-linkedin"
                  role="img"
                  className="md hydrated"
                  aria-label="logo linkedin"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header1;
