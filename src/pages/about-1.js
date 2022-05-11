import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Team from "../components/Common/Team";
import FunFactsArea from "../components/Common/FunFactsArea";
import Partner from "../components/Common/Partner";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';

import AboutOne from "../assets/images/about-one.png";

const About1 = () => (
    <Layout>
        <SEO title="About Us Page" /> 

        <Navbar />

        <PageBanner pageTitle="About Us" />

        <div className="about-area ptb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={AboutOne} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="section-title">
                                <h2>About Us</h2>
                                <div className="bar"></div>
                                <p>California-based BlackPenguin is believed to be one of the popular providers of IT services. The professional company is closely structured in such a way to offer more acquirable results and solutions for use in a variety of businesses, encountering problems in information and technology sector.</p>
                            </div>

                            <p>The dealing with each and every client is being valued by the company, which completely go through the demands of the customers and deliver it accordingly. With the opening of newer horizons, the company is still able to maintain its reputed position in the market. Hyperlink maintains an excellent team with highly skilled and dynamic expert professionals in order to preserve the service excellence. The team experts who are highly motivated will mainly focus on fulfilling the necessities of the company's principals. Innovation, commitment, quality and superior service help to determine the ways to reach the profitable growth. The company equipped with fine infrastructure and ideal technology support together with the broader distribution network so that the business requirements of the partners can be satisfied. Our only goal is to make the clients and customers happy with our valuable products and services.</p>
                        </div>
                    </div>
                </div>

                <div className="about-inner-area">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Our History</h3>
                                <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Our Mission</h3>
                                <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Who We Are</h3>
                                <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Team />

        <Partner />

        <FunFactsArea />
        
        <Footer />
    </Layout>
)

export default About1;
