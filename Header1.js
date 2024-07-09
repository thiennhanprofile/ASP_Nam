import React from 'react'
import { Link } from 'react-router-dom'

function Header1() {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <ul className="header-social-container">
                        <li>
                            <Link href="#" className="social-link">
                                <ion-icon name="logo-facebook" role="img" className="md hydrated" aria-label="logo facebook" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="social-link">
                                <ion-icon name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="social-link">
                                <ion-icon name="logo-instagram" role="img" className="md hydrated" aria-label="logo instagram" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="social-link">
                                <ion-icon name="logo-linkedin" role="img" className="md hydrated" aria-label="logo linkedin" />
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
                    <Link href="#" className="header-logo">
                        <img src={require("../assets/images/logo/logo.jpg")} alt="Anon's logo" width={120} height={36} />
                    </Link>
                    <div className="header-search-container">
                        <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
                        <button className="search-btn">
                            <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline" />
                        </button>
                    </div>
                    <div className="header-user-actions">
                        <button className="action-btn">
                            <ion-icon name="person-outline" role="img" className="md hydrated" aria-label="person outline" />
                        </button>
                        <button className="action-btn">
                            <ion-icon name="heart-outline" role="img" className="md hydrated" aria-label="heart outline" />
                            <span className="count">49</span>
                        </button>
                        <button className="action-btn">
                            <ion-icon name="bag-handle-outline" role="img" className="md hydrated" aria-label="bag handle outline" />
                            <span className="count">49</span>
                        </button>
                    </div>
                </div>
            </div>
            <nav className="desktop-navigation-menu">
                <div className="container">
                    <ul className="desktop-menu-category-list">
                        <li className="menu-category">
                            <Link href="#" className="menu-title">Home</Link>
                        </li>
                        <li className="menu-category">
                            <Link href="#" className="menu-title">Categories</Link>
                            <div className="dropdown-panel">
                                <ul className="dropdown-panel-list">
                                    <li className="menu-title">
                                        <Link href="#">Electronics</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Desktop</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Laptop</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Camera</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Tablet</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Headphone</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">
                                            <img src={require("../assets/images/electronics-banner-1.jpg")} alt="headphone collection" width={250} height={119} />
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="dropdown-panel-list">
                                    <li className="menu-title">
                                        <Link href="#">Men's</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Formal</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Casual</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Sports</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Jacket</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Sunglasses</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">
                                            <img src={require("../assets/images/mens-banner.jpg")} alt="men's fashion" width={250} height={119} />
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="dropdown-panel-list">
                                    <li className="menu-title">
                                        <Link href="#">Women's</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Formal</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Casual</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Perfume</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Cosmetics</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Bags</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">
                                            <img src={require("../assets/images/womens-banner.jpg")} alt="women's fashion" width={250} height={119} />
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="dropdown-panel-list">
                                    <li className="menu-title">
                                        <Link href="#">Electronics</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Smart Watch</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Smart TV</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Keyboard</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Mouse</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">Microphone</Link>
                                    </li>
                                    <li className="panel-list-item">
                                        <Link href="#">
                                            <img src={require("../assets/images/electronics-banner-2.jpg")} alt="mouse collection" width={250} height={119} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="menu-category">
                            <Link href="#" className="menu-title">Men's</Link>
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <Link href="#">Shirt</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Shorts &amp; Jeans</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Safety Shoes</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Wallet</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <Link href="#" className="menu-title">Women's</Link>
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <Link href="#">Dress &amp; Frock</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Earrings</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Necklace</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Makeup Kit</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <Link href="#" className="menu-title">Jewelry</Link>
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <Link href="#">Earrings</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Couple Rings</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Necklace</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Bracelets</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <Link href="#" className="menu-title">Perfume</Link>
                            <ul className="dropdown-list">
                                <li className="dropdown-item">
                                    <Link href="#">Clothes Perfume</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Deodorant</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Flower Fragrance</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link href="#">Air Freshener</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <Link href="#" className="menu-title">Blog</Link>
                        </li>
                        <li className="menu-category">
                            <Link href="#" className="menu-title">Hot Offers</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="mobile-bottom-navigation">
                <button className="action-btn" data-mobile-menu-open-btn>
                    <ion-icon name="menu-outline" role="img" className="md hydrated" aria-label="menu outline" />
                </button>
                <button className="action-btn">
                    <ion-icon name="bag-handle-outline" role="img" className="md hydrated" aria-label="bag handle outline" />
                    <span className="count">0</span>
                </button>
                <button className="action-btn">
                    <ion-icon name="home-outline" role="img" className="md hydrated" aria-label="home outline" />
                </button>
                <button className="action-btn">
                    <ion-icon name="heart-outline" role="img" className="md hydrated" aria-label="heart outline" />
                    <span className="count">0</span>
                </button>
                <button className="action-btn" data-mobile-menu-open-btn>
                    <ion-icon name="grid-outline" role="img" className="md hydrated" aria-label="grid outline" />
                </button>
            </div>
            <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>
                <div className="menu-top">
                    <h2 className="menu-title">Menu</h2>
                    <button className="menu-close-btn" data-mobile-menu-close-btn>
                        <ion-icon name="close-outline" role="img" className="md hydrated" aria-label="close outline" />
                    </button>
                </div>
                <ul className="mobile-menu-category-list">
                    <li className="menu-category">
                        <Link href="#" className="menu-title">Home</Link>
                    </li>
                    <li className="menu-category">
                        <button className="accordion-menu" data-accordion-btn>
                            <p className="menu-title">Men's</p>
                            <div>
                                <ion-icon name="add-outline" className="add-icon md hydrated" role="img" aria-label="add outline" />
                                <ion-icon name="remove-outline" className="remove-icon md hydrated" role="img" aria-label="remove outline" />
                            </div>
                        </button>
                        <ul className="submenu-category-list" data-accordion>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Shirt</Link>
                            </li>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Shorts &amp; Jeans</Link>
                            </li>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Safety Shoes</Link>
                            </li>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Wallet</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-category">
                        <button className="accordion-menu" data-accordion-btn>
                            <p className="menu-title">Women's</p>
                            <div>
                                <ion-icon name="add-outline" className="add-icon md hydrated" role="img" aria-label="add outline" />
                                <ion-icon name="remove-outline" className="remove-icon md hydrated" role="img" aria-label="remove outline" />
                            </div>
                        </button>
                        <ul className="submenu-category-list" data-accordion>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Dress &amp; Frock</Link>
                            </li>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Earrings</Link>
                            </li>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Necklace</Link>
                            </li>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Makeup Kit</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-category">
                        <button className="accordion-menu" data-accordion-btn>
                            <p className="menu-title">Jewelry</p>
                            <div>
                                <ion-icon name="add-outline" className="add-icon md hydrated" role="img" aria-label="add outline" />
                                <ion-icon name="remove-outline" className="remove-icon md hydrated" role="img" aria-label="remove outline" />
                            </div>
                        </button>
                        <ul className="submenu-category-list" data-accordion>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Earrings</Link>
                            </li>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Couple Rings</Link>
                            </li>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Necklace</Link>
                            </li>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Bracelets</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-category">
                        <button className="accordion-menu" data-accordion-btn>
                            <p className="menu-title">Perfume</p>
                            <div>
                                <ion-icon name="add-outline" className="add-icon md hydrated" role="img" aria-label="add outline" />
                                <ion-icon name="remove-outline" className="remove-icon md hydrated" role="img" aria-label="remove outline" />
                            </div>
                        </button>
                        <ul className="submenu-category-list" data-accordion>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Clothes Perfume</Link>
                            </li>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Deodorant</Link>
                            </li>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Flower Fragrance</Link>
                            </li>
                            <li className="submenu-category">
                                <Link href="#" className="submenu-title">Air Freshener</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-category">
                        <Link href="#" className="menu-title">Blog</Link>
                    </li>
                    <li className="menu-category">
                        <Link href="#" className="menu-title">Hot Offers</Link>
                    </li>
                </ul>
                <div className="menu-bottom">
                    <ul className="menu-category-list">
                        <li className="menu-category">
                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Language</p>
                                <ion-icon name="caret-back-outline" className="caret-back md hydrated" role="img" aria-label="caret back outline" />
                            </button>
                            <ul className="submenu-category-list" data-accordion>
                                <li className="submenu-category">
                                    <Link href="#" className="submenu-title">English</Link>
                                </li>
                                <li className="submenu-category">
                                    <Link href="#" className="submenu-title">Español</Link>
                                </li>
                                <li className="submenu-category">
                                    <Link href="#" className="submenu-title">Frençh</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu-category">
                            <button className="accordion-menu" data-accordion-btn>
                                <p className="menu-title">Currency</p>
                                <ion-icon name="caret-back-outline" className="caret-back md hydrated" role="img" aria-label="caret back outline" />
                            </button>
                            <ul className="submenu-category-list" data-accordion>
                                <li className="submenu-category">
                                    <Link href="#" className="submenu-title">USD $</Link>
                                </li>
                                <li className="submenu-category">
                                    <Link href="#" className="submenu-title">EUR €</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="menu-social-container">
                        <li>
                            <Link href="#" className="social-link">
                                <ion-icon name="logo-facebook" role="img" className="md hydrated" aria-label="logo facebook" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="social-link">
                                <ion-icon name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="social-link">
                                <ion-icon name="logo-instagram" role="img" className="md hydrated" aria-label="logo instagram" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="social-link">
                                <ion-icon name="logo-linkedin" role="img" className="md hydrated" aria-label="logo linkedin" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Header1
