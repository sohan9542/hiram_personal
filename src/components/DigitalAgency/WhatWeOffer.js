import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

import AgencyIconBG from "../../assets/images/agency-image/agency-icon-bg.png";
import AgencyShape1 from "../../assets/images/agency-image/agency-shape1.png";

const WhatWeOffer = () => {
    return (
        <div className="solutions-area ptb-80">
            <div className="container">
                <div className="section-title st-fs-28">
                    <span className="sub-title">Features</span>
                    <h2>Our Key Features</h2>
                    <div className="bar"></div>
                    <p>Services That We Deliver Makes Us Dignified As One of The Top App Development Companies.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-group"></i>
                                <img src={AgencyIconBG} alt="image" />
                            </div>

                            <h3>
                                <Link to="/service-details">
                                Dedicated Development Team
                                </Link>
                            </h3>
                            <p>Our skilled team leverage projects to provide best results.The team dedicates their every effort and does not look back until it's accomplished.</p>

                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-male"></i>
                                <img src={AgencyIconBG} alt="image" />
                            </div>

                            <h3>
                                <Link to="/service-details">
                                    Client Centric Development
                                </Link>
                            </h3>
                            <p>We craft the client's needs on web, mobile, and blockchain to tailor the solutions and enhance growth of the businesses.</p>

                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bx-file"></i>
                                <img src={AgencyIconBG} alt="image" />
                            </div>

                            <h3>
                                <Link to="/service-details">
                                    Data Protection
                                </Link>
                            </h3>
                            
                            <p>By signing an NDA, our company ensures the utmost safety of all your private data. We deliver best-rated products to maintain confidentiality.</p>

                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="solutions-box">
                            <div className="icon">
                                <i className="bx bxs-devices"></i>
                                <img src={AgencyIconBG} alt="image" />
                            </div>

                            <h3>
                                <Link to="/service-details">
                                    Quality Deliverance
                                </Link>
                            </h3>
                            <p>We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price.</p>

                            <Link to="/service-details" className="learn-more-btn">
                                <Icon.PlusCircle /> Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="shape9 slow mobile-dnone">
                <img 
                    src={AgencyShape1} 
                    className="animate__animated animate__fadeInLeft animate__delay-0.7s" 
                    alt="image" 
                />
            </div>
        </div>
    );
}

export default WhatWeOffer;