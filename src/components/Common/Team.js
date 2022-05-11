import React from 'react';
import * as Icon from 'react-feather';

import Team1 from '../../assets/images/team-image/hirammendiola_blackpenguin.jpg'
import Team2 from '../../assets/images/team-image/team5.jpg'
import Team3 from '../../assets/images/team-image/jimmygarcia_blackpenguin.jpg'
import Team4 from '../../assets/images/team-image/pabloportilla_blackpenguin.jpg'
import Team5 from '../../assets/images/team-image/team5.jpg'
import Team6 from '../../assets/images/team-image/asfand_blackpenguin.jpg'
import Team7 from '../../assets/images/team-image/sohanur_blackpenguin.jpg'
import Team8 from '../../assets/images/team-image/team5.jpg'
import Team9 from '../../assets/images/team-image/team5.jpg'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    items: 5,
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        900: {
            items: 3
        },
        1200: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
}

const Team = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="team-area ptb-80 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Our Awesome Team</h2>
                    <div className="bar"></div>
                    <p>Our Dedicated & Proficient Team.</p>
                </div>
            </div>

            {display ? <OwlCarousel 
                className="team-slider owl-carousel owl-theme owl-theme-style"
                {...options}
            > 
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team1} alt="image" />
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

                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                    </div>
                </div>
            
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team2} alt="image" />
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
    
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team3} alt="image" />
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
            
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team4} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Pablo Portilla</h3>
                            <span>Finance Manager</span>
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
        
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team5} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Karol Ruiz</h3>
                            <span>UI/Ux Designer</span>
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
        
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team6} alt="image" />
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

                        <p>Fitness freak, movie buff and Javascript Developer. </p>
                    </div>
                </div>
        
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team7} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Sohanur Rahman</h3>
                            <span>Frontend Developer</span>
                        </div>

                        <ul>

                            <li>
                                <a href="https://www.instagram.com/real_so_han/" target="_blank" rel="noreferrer">
                                    <Icon.Instagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/dev-sohan/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/sohan9542" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>

                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                    </div>
                </div>
        
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team8} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Misbah Gunabi</h3>
                            <span>Web Developer</span>
                        </div>

                        <ul>
                            <li>
                                <a href="https://www.instagram.com/misbahgunabi/" target="_blank" rel="noreferrer">
                                    <Icon.Instagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/misbahgunabi/" target="_blank" rel="noreferrer">
                                    <Icon.Linkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/misbahgunabi" target="_blank" rel="noreferrer">
                                    <Icon.Gitlab />
                                </a>
                            </li>
                        </ul>

                        <p>I like travel, and Love to Code. </p>
                    </div>
                </div>
    
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team9} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Enrique Espejo</h3>
                            <span>Marketing Manager</span>
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
            
                <div className="single-team">
                    <div className="team-image">
                        <img src={Team5} alt="image" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>Hans Cuadros</h3>
                            <span>Sales Manager</span>
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
            </OwlCarousel> : ''}
        </div>
    )
}

export default Team;