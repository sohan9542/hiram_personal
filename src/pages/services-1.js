import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';
import { Link } from "gatsby";
import * as Icon from 'react-feather';
import p1 from "../assets/picture/image 1.png"
import p9 from "../assets/picture/image 9.png"
import p2 from "../assets/picture/image 2.png"
import p3 from "../assets/picture/image 3.png"
import p4 from "../assets/picture/image 4.png"
import p5 from "../assets/picture/image 5.png"
import p6 from "../assets/picture/image 6.png"
import p7 from "../assets/picture/image 7.png"
const Services1 = () => (
    <Layout>
        <SEO title="Services" /> 

        <Navbar />

        <PageBanner pageTitle="Services!" />

        <div className="services-area-two pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services</h2>
                    <div className="bar"></div>
                    <p>Because We Believe In Delivering Excellence!.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                               <img src={p9} alt="" />
                            </div>
                            <h3>
                                <Link to="/app-development">
                                    App Development
                                </Link>
                            </h3>
                            <p>The smartphone Apps have changed the definition of every day activity in human life. It has been an essential part of our lives ...</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon" style={{overflow:"hidden"}}>
                            <img src={p7} alt="" />
                            </div>
                            <h3>
                                <Link to="/web-development">
                                    Web Development
                                </Link>
                            </h3>
                            <p>The website has become an essential and significant part of human life. Every business needs a website to showcase its skill...</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-box">
                        <div className="icon" style={{overflow:"hidden"}}>
                            <img src={p6} alt="" />
                            </div>
                            <h3>
                                <Link to="/ecommerce-development">
                                    Ecommerce Development
                                </Link>
                            </h3>
                            <p>It is a simple method of purchasing and selling transactions of products based online over the internet. The E-Commerce website is ...</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-box">
                        <div className="icon" style={{overflow:"hidden"}}>
                            <img src={p5} alt="" />
                            </div>
                            <h3>
                                <Link to="/video-production">
                                    Video Production
                                </Link>
                            </h3>
                            <p>We work hard to make videos that connect you to your audience and ultimately provide real value to your organization. We offer ...</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-box">
                        <div className="icon" style={{overflow:"hidden"}}>
                            <img src={p4} alt="" />
                            </div>
                            <h3>
                                <Link to="/game-development">
                                    Game Development
                                </Link>
                            </h3>
                            <p>With the gaming business turning into a strong, multi-billion-dollar substance, the necessities for games introduced in the market are ...</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-box">
                        <div className="icon" style={{overflow:"hidden"}}>
                            <img src={p3} alt="" />
                            </div>
                            <h3>
                                <Link to="/branding-development">
                                    Branding Development
                                </Link>
                            </h3>
                            <p>Now more than ever, consumers care about the brand behind a company: what it sounds like, what it looks like, what it stands for.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-box">
                        <div className="icon" style={{overflow:"hidden"}}>
                            <img src={p2} alt="" />
                            </div>
                            <h3>
                                <Link to="/ai-ml">
                                    AI & ML
                                </Link>
                            </h3>
                            <p>Artificial Intelligence and Machine Learning are two emerging trends in technologies. Hyperlink InfoSystem caters to the prominent AI and ...</p>
                        </div>
                    </div>

                    {/* <div className="col-lg-4 col-sm-6">
                        <div className="single-services-box">
                        <div className="icon" style={{overflow:"hidden"}}>
                            <img src={p1} alt="" />
                            </div>
                            <h3>
                                <Link to="/iot-embedded">
                                    IoT & Embedded
                                </Link>
                            </h3>
                            <p>IoT presents a powerful mechanism to connect various objects with the internet and take advantage of smart technology.</p>
                        </div>
                    </div> */}

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-box">
                        <div className="icon" style={{overflow:"hidden"}}>
                            <img src={p1} alt="" />
                            </div>
                            <h3>
                                <Link to="/devops">
                                    DevOps
                                </Link>
                            </h3>
                            <p>Dev stands for Software Development, and Ops stands for information technology operations. Adopting DevOps aims to reduce ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <Footer />
    </Layout>
)

export default Services1;
