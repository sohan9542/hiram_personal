import React from 'react';
import { Link } from "gatsby";

import AgencyBannerImg from "../../assets/images/agency-image/agency-banner-img.jpg";

// Shape Images
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";

const MainBanner = () => {
    return (
        <div className="agency-main-banner">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="agency-banner-content">
                            <span className="sub-title">We Help Business</span>
                            <h1>Achieving Goals</h1>
                            <p>Blackpenguin is a digital product agency helping startups and big companies deliver meaningful experiences to users all over the world.</p>

                            <Link to="/contact" className="btn btn-secondary">
                                Get Started
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="agency-banner-image">
                            <img src={AgencyBannerImg} alt="image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape3">
                <img src={Shape3} alt="shape" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
        </div>
    );
}

export default MainBanner;