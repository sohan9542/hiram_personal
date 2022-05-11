import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

// Blog Post Images
import BlogImg1 from '../../assets/images/blog-image/blog1.jpg'
import BlogImg2 from '../../assets/images/blog-image/blog2.jpg'
import BlogImg3 from '../../assets/images/blog-image/blog3.jpg'

// Shape Images
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";

const BlogPostStyleTwo = () => {
    return (
        <div className="blog-area pt-80 pb-50">
            <div className="container">
                <div className="section-title st-fs-28">
                    <span className="sub-title">News</span>
                    <h2>Latest Blog</h2>
                    <div className="bar"></div>
                    <p>Explore the Latest Blogs on Trends and Technologies.</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post-item">
                            <div className="post-image">
                                <Link to="/blog-details">
                                    <img src={BlogImg1} alt="image" />
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li>
                                        <Link to="/author">Admin</Link>
                                    </li>
                                    <li>August 15, 2021</li>
                                </ul>

                                <h3>
                                    <Link to="/blog-details">
                                        5 Best Food Delivery Apps Of Perú In 2022
                                    </Link>
                                </h3>

                                <Link to="/blog-details" className="read-more-btn">
                                    Read More <Icon.PlusCircle />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post-item">
                            <div className="post-image">
                                <Link to="/blog-details">
                                    <img src={BlogImg2} alt="image" />
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li>
                                        <Link to="/author">Admin</Link>
                                    </li>
                                    <li>August 15, 2021</li>
                                </ul>

                                <h3>
                                    <Link to="/blog-details">
                                     Ethereum Blockchain Transformation Through Smart Contract
                                    </Link>
                                </h3>

                                <Link to="/blog-details" className="read-more-btn">
                                    Read More <Icon.PlusCircle />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post-item">
                            <div className="post-image">
                                <Link to="/blog-details">
                                    <img src={BlogImg3} alt="image" />
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta">
                                    <li>
                                        <Link to="/author">Admin</Link>
                                    </li>
                                    <li>August 15, 2021</li>
                                </ul>
                                <h3>
                                    <Link to="/blog-details">
                                        10 Most Fascinating Metaverse Crypto Projects
                                    </Link>
                                </h3>

                                <Link to="/blog-details" className="read-more-btn">
                                    Read More <Icon.PlusCircle />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape"/>
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

export default BlogPostStyleTwo;