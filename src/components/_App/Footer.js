import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

import Logo from '../../assets/images/logo.png'
import MapImg from '../../assets/images/map.png'
import Shape1 from '../../assets/images/shape1.png'
import Shape2 from '../../assets/images/shape2.svg'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-area bg-f7fafd">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link to="/it-startup">
                                    <img src={Logo} alt="logo" />
                                </Link>
                            </div>
                            <p>Blackpenguin is a digital product agency helping startups and big companies deliver meaningful experiences to users all over the world. It has been an essential part of our lives and why not?</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Company</h3>
                            <ul className="list">
                                <li>
                                    <Link to="/about-1">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services-1">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/features">
                                        Features
                                    </Link>
                                </li>
           
                                <li>
                                    <Link to="/blog-1">
                                        Latest News
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>
                            <ul className="list">
                                <li>
                                    <Link to="/faq">
                                        FAQ's
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/term-condition">
                                        Terms & Condition
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            
                            <ul className="footer-contact-info">
                                <li> 
                                    <Icon.MapPin />
                                    San Jose <br /> CA 95121, USA
                                </li>
                                <li>
                                    <Icon.Mail />
                                    Email: <Link to="mailto:hello@blackpenguin.site">hello@blackpenguin.site</Link>
                                </li>
                                <li> 
                                    <Icon.PhoneCall />
                                    Phone: <Link to="tel:+16693018191">(669) 301 8191</Link>
                                </li>
                            </ul>

                            <ul className="social-links">
                                <li>
                                    <a href="https://www.facebook.com/" className="facebook" target="_blank" rel="noreferrer"><Icon.Facebook /></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="twitter" target="_blank" rel="noreferrer"><Icon.Twitter /></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" className="instagram" target="_blank" rel="noreferrer"><Icon.Instagram /></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="linkedin" target="_blank" rel="noreferrer"><Icon.Linkedin /></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>Copyright &copy; {currentYear} BlackPenguin. All rights reserved by <a href="https://blackpenguin.site/" target="_blank">BlackPenguin</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={MapImg} className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src={Shape1} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
        </footer>
    )
     
}

export default Footer; 