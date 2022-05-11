import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';
import * as Icon from 'react-feather';

import Team1 from "../assets/images/team-image/hirammendiola_blackpenguin.jpg";
import Team2 from "../assets/images/team-image/jimmygarcia_blackpenguin.jpg";
import Team3 from "../assets/images/team-image/pabloportilla_blackpenguin.jpg";
import Team4 from "../assets/images/team-image/karolruiz_blackpenguin.jpg";
import Team5 from "../assets/images/team-image/asfand_blackpenguin.jpg";
import Team6 from "../assets/images/team-image/sohanur_blackpenguin.jpg";
import Team7 from "../assets/images/team-image/joseruiz_blackpenguin.jpg";
import Team8 from "../assets/images/team-image/misbah_blackpenguin.jpg";
import Team9 from "../assets/images/team-image/ivanpuccinelli_blackpenguin.jpg";


const Team = () => (
    <Layout>
        <SEO title="Team" /> 

        <Navbar />

        <PageBanner pageTitle="Team" />

        <div className="team-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src={Team1} alt="hirammendiola_blackpenguin" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Hiram Mendiola</h3>
                                    <span>CEO & Founder</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src={Team2} alt="jimmygarcia_blackpenguin" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Jimmy Garcia</h3>
                                    <span>Conceptual Artist</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src={Team3} alt="pabloportilla_blackpenguin" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Pablo Portilla</h3>
                                    <span>Finance Guy</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src={Team4} alt="KarolRuiz_blackpenguin" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>Karol Ruiz</h3>
                                    <span>UX/UI Designer</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src={Team5} alt="Asfand_blackpenguin" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                <h3>Asfand Aftab</h3>
                            <span>Backend Developer</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src={Team6} alt="Sohanur_blackpenguin" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                <h3>Sohanur Rahman</h3>
                            <span>Frontend Developer</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src={Team7} alt="JoseRuiz_blackpenguin" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                <h3>Jose Ruiz</h3>
                            <span>Cinematographer</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src={Team8} alt="Misbah_blackpenguin" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                <h3>Misbah Gunabi</h3>
                            <span>Web Developer</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-team">
                            <div className="team-image">
                                <img src={Team9} alt="IvanPuccinelli_blackpenguin" />
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                <h3>Ivan Puccinelli</h3>
                            <span>Pentester</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://gitlab.com/" target="_blank" rel="noreferrer">
                                            <Icon.Gitlab />
                                        </a>
                                    </li>
                                </ul>

                                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </Layout>
)

export default Team;