import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
           
            <div className="footer-nav">
                <div className="container">
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Popular Categories</h2>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Fashion</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Electronic</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Cosmetic</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Health</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Watches</Link>
                        </li>
                    </ul>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Products</h2>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Prices drop</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">New products</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Best sales</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Contact us</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Sitemap</Link>
                        </li>
                    </ul>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Our Company</h2>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Delivery</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Legal Notice</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Terms and conditions</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">About us</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Secure payment</Link>
                        </li>
                    </ul>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Services</h2>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Prices drop</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">New products</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Best sales</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Contact us</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link href="#" className="footer-nav-link">Sitemap</Link>
                        </li>
                    </ul>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Contact</h2>
                        </li>
                        <li className="footer-nav-item flex">
                            <div className="icon-box">
                                <ion-icon name="location-outline" role="img" className="md hydrated" aria-label="location outline" />
                            </div>
                            <address className="content">
                                419 State 414 Rte
                                Beaver Dams, New York(NY), 14812, USA
                            </address>
                        </li>
                        <li className="footer-nav-item flex">
                            <div className="icon-box">
                                <ion-icon name="call-outline" role="img" className="md hydrated" aria-label="call outline" />
                            </div>
                            <Link href="tel:+607936-8058" className="footer-nav-link">(607) 936-8058</Link>
                        </li>
                        <li className="footer-nav-item flex">
                            <div className="icon-box">
                                <ion-icon name="mail-outline" role="img" className="md hydrated" aria-label="mail outline" />
                            </div>
                            <Link href="mailto:example@gmail.com" className="footer-nav-link">example@gmail.com</Link>
                        </li>
                    </ul>
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <h2 className="nav-title">Follow Us</h2>
                        </li>
                        <li>
                            <ul className="social-link">
                                <li className="footer-nav-item">
                                    <Link href="#" className="footer-nav-link">
                                        <ion-icon name="logo-facebook" role="img" className="md hydrated" aria-label="logo facebook" />
                                    </Link>
                                </li>
                                <li className="footer-nav-item">
                                    <Link href="#" className="footer-nav-link">
                                        <ion-icon name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter" />
                                    </Link>
                                </li>
                                <li className="footer-nav-item">
                                    <Link href="#" className="footer-nav-link">
                                        <ion-icon name="logo-linkedin" role="img" className="md hydrated" aria-label="logo linkedin" />
                                    </Link>
                                </li>
                                <li className="footer-nav-item">
                                    <Link href="#" className="footer-nav-link">
                                        <ion-icon name="logo-instagram" role="img" className="md hydrated" aria-label="logo instagram" />
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
        </footer>

    )
}

export default Footer
