import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

const OurServices = () => {
    return (
        <div className="services-area-two pt-80 pb-50 bg-f7fafd">
			<div className="container">
				<div className="section-title">
					<h2>Our Services</h2>
					<div className="bar"></div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon">
                                <Icon.Settings />
							</div>
							<h3>
								<Link to="/service-details">
                                	Incredible Infrastructure
								</Link>
                            </h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon">
                                <Icon.Mail />
							</div> 
							<h3>
								<Link to="/service-details">
                                	Email Notifications
								</Link>
                            </h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon">
                                <Icon.Bell />
							</div> 
							<h3>
								<Link to="/service-details">
                                	Best Analytics Audits
								</Link>
                            </h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon bg-4F321E">
                                <Icon.Grid />
							</div>
							<h3>
								<Link to="/service-details">
                                	Simple Dashboard
								</Link>
                            </h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon bg-4F321E">
                                <Icon.Info />
							</div> 
							<h3>
								<Link to="/service-details">
                                	Information Retrieval
								</Link>
                            </h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon bg-4F321E">
                                <Icon.HardDrive />
							</div> 
							<h3>
								<Link to="/service-details">
                                	Deep Technical SEO
								</Link>
                            </h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon bg-eb6b3d">
                                <Icon.MousePointer />
							</div>
							<h3>
								<Link to="/service-details">
                                	Drag & Drop Functionality
								</Link>
                            </h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon bg-eb6b3d">
                                <Icon.Bell />
							</div> 
							<h3>
								<Link to="/service-details">
                                	Deadline Reminders
								</Link>
                            </h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-services-box">
							<div className="icon bg-eb6b3d">
                                <Icon.Send />
							</div> 
							<h3>
								<Link to="/service-details">
                                	Modern Keyword Analysis
								</Link>
                            </h3>
							<p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default OurServices;  