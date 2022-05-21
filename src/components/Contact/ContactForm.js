import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import ContactImg from "../../assets/images/contact-img.png"

const ContactForm = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_0mky8zy",
        "template_kopaktp",
        form.current,
        "-7c_u58iGpsr6TU17"
      )
      .then(
        result => {
          console.log(result.text)
          // toast("Email Send Successfull");
        },
        error => {
          console.log(error.text)
        }
      )
  }
  return (
    <div className="contact-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch With Us</h2>
          <div className="bar"></div>
          <p>
            We would be happy to hear from you, please fill in the form below or
            mail us your requirements on
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <img src={ContactImg} alt="image" />
          </div>

          <div className="col-lg-6 col-md-12">
            <form ref={form} onSubmit={sendEmail} id="contactForm">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      required
                      name="user_name"
                      placeholder="Your Name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      required
                      name="user_email"
                      placeholder="Your email address"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      required
                      name="number"
                      placeholder="Your phone number"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      required
                      name="user_subject"
                      placeholder="Your Subject"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols="30"
                      required
                      rows="5"
                      placeholder="Write your message..."
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
