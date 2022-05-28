import React from "react";
import {Link} from 'gatsby';
import * as Icon from 'react-feather';

import Logo from "../../assets/images/logo.png"

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link to="/digital-agency" onClick={toggleNavbar} className="navbar-brand">
                            <img src={Logo} alt="logo" />
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                    <Link to="/digital-agency" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                        Home
                                    </Link>
                            </li>
                            <li className="nav-item">
                                    <Link to="/about-1" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                        About
                                    </Link>
                            </li>   
                            <li className="nav-item">
                                    <Link to="/services-1" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                        Services
                                    </Link>
                            </li>
                            <li className="nav-item">
                                    <Link to="/projects-1" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                        Projects
                                    </Link>
                            </li>
                            {/* <li className="nav-item">
                                    <Link to="/blog-1" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                        News
                                    </Link>
                            </li> */}
                            <li className="nav-item">
                                    <Link to="/contact" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                        Contact
                                    </Link>
                            </li>
                            </ul>
                        </div>


                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;