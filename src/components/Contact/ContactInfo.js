import React from 'react';
import * as Icon from 'react-feather';

const ContactInfo = () => {
    return (
        <div className="contact-info-area ptb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Mail />
                            </div>
                            <h3>Mail Here</h3>
                            <p><a href="mailto:hello@blackpenguin.site">hello@blackpenguin.site</a></p>
                       
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.MapPin />
                            </div>
                            <h3>Visit Here</h3>
                            <p>2974 Abigail Ln, San Jose, CA 95121, United States of America</p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Phone />
                            </div>
                            <h3>Call Here</h3>
                            <p><a href="tel:+16693018191">(669) 301-8191</a></p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;  