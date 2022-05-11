import React from 'react';
import { Link } from "gatsby";

import AgencyAboutImg from "../../assets/images/agency-image/agency-about-img.jpg";

// Shape Images 
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg"; 
import Shape5 from "../../assets/images/agency-image/agency-shape2.png"; 

const AboutUsContent = () => {
    return (
        <div className="agency-about-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="agency-about-img">
                            <img src={AgencyAboutImg} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="agency-about-content">
                            <span className="sub-title">About Us</span>
                            <h2>Because we deliver the best & we are unbeatable.</h2>
                            <div className="bar"></div>
                            <p>BlackPenguin Inc is a renowned mobile app development company based in Sillicon Valley, Brasil, Perú & Bahamas, established in 2011. Apart from this, we also have sales offices in Spain.</p>
                            <p>BlackPenguin is well known to craft the most innovative & eye catchy mobile apps & websites. We offer a wide range of customized services in mobile apps, website development, AR-VR Development, Game Development, Blockchain Development and much more. Our skilled team & our products are engineered to bring growth to your business. We believe in delivering the services without compromising on time and quality.</p>

                            <Link to="/about" className="btn btn-secondary">
                                Discover More
                            </Link>
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
            <div className="shape6 rotateme">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape10">
                <img src={Shape5} alt="image" />
            </div>
        </div>
    );
}

export default AboutUsContent;