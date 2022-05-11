import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

import AgencyServicesImg1 from "../../assets/images/agency-image/agency-services-img1.jpg";
import AgencyServicesImg2 from "../../assets/images/agency-image/agency-services-img2.jpg";
import AgencyServicesImg3 from "../../assets/images/agency-image/agency-services-img3.jpg";
import AgencyServicesImg4 from "../../assets/images/agency-image/agency-services-img4.jpg";
import AgencyServicesImg5 from "../../assets/images/agency-image/agency-services-img5.jpg";
import AgencyServicesImg6 from "../../assets/images/agency-image/agency-services-img6.jpg";

// Shape Images
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";

const OurServices = () => {
    return (
        <div className="agency-services-area pt-80 pb-50">
            <div className="container">
                <div className="section-title st-fs-28">
                    <span className="sub-title">Our Solutions</span>
                    <h2>Our Services</h2>
                    <div className="bar"></div>
                    <p>Services That We Deliver Makes Us Dignified As One of The Top App Development Companies.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="agency-services-box">
                            <img src={AgencyServicesImg1} alt="image" />

                            <div className="content">
                                <h3>
                                    <Link to="/app-development">
                                        App Development
                                    </Link>
                                </h3>

                                <Link to="/app-development" className="read-more-btn">
                                    Read More <Icon.PlusCircle />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="agency-services-box">
                            <img src={AgencyServicesImg2} alt="image" />

                            <div className="content">
                                <h3>
                                    <Link to="/web-development">
                                        Web Development
                                    </Link>
                                </h3>

                                <Link to="/web-development" className="read-more-btn">
                                    Read More <Icon.PlusCircle />
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="agency-services-box">
                            <img src={AgencyServicesImg3} alt="image" />

                            <div className="content">
                                <h3>
                                    <Link to="/ecommerce-development">
                                    Ecommerce Development
                                    </Link>
                                </h3>

                                <Link to="/ecommerce-development" className="read-more-btn">
                                    Read More <Icon.PlusCircle />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="agency-services-box">
                            <img src={AgencyServicesImg4} alt="image" />

                            <div className="content">
                                <h3>
                                    <Link to="/video-production">
                                        Video Production
                                    </Link>
                                </h3>

                                <Link to="/video-production" className="read-more-btn">
                                    Read More <Icon.PlusCircle />
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="agency-services-box">
                            <img src={AgencyServicesImg5} alt="image" />

                            <div className="content">
                                <h3>
                                    <Link to="/game-development">
                                    Game Development
                                    </Link>
                                </h3>

                                <Link to="/game-development" className="read-more-btn">
                                    Read More <Icon.PlusCircle />
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="agency-services-box">
                            <img src={AgencyServicesImg6} alt="image" />

                            <div className="content">
                                <h3>
                                    <Link to="/branding-development">
                                        Branding Development
                                    </Link>
                                </h3>

                                <Link to="/branding-development" className="read-more-btn">
                                    Read More <Icon.PlusCircle />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="agency-services-box">
                            <img src={AgencyServicesImg6} alt="image" />

                            <div className="content">
                                <h3>
                                    <Link to="/ai-ml">
                                        AI & ML
                                    </Link>
                                </h3>

                                <Link to="/ai-ml" className="read-more-btn">
                                    Read More <Icon.PlusCircle />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="agency-services-box">
                            <img src={AgencyServicesImg6} alt="image" />

                            <div className="content">
                                <h3>
                                    <Link to="/iot-embedded">
                                        IoT & Embedded
                                    </Link>
                                </h3>

                                <Link to="/iot-embedded" className="read-more-btn">
                                    Read More <Icon.PlusCircle />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="agency-services-box">
                            <img src={AgencyServicesImg6} alt="image" />

                            <div className="content">
                                <h3>
                                    <Link to="/devops">
                                        DevOps
                                    </Link>
                                </h3>

                                <Link to="/devops" className="read-more-btn">
                                    Read More <Icon.PlusCircle />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape3">
                <img src={Shape3} alt="shape" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
        </div>
    );
}

export default OurServices;