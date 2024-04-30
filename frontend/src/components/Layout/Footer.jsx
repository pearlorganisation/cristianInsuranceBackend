import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        {/* <div className="newsletter-section">
        <div className="container">
          <div className="row subscribe-newsletter align-items-center">
            <div className="col-lg-6 col-12">
              <div className="newsletter-content">
                <h2>Subscribe To Newsletter</h2>
                <p>
                  Stay informed with our latest updates! Subscribe to our
                  newsletter to receive exclusive content & special offers.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="newsletter-form">
                <form action="#" method="POST">
                  <div className="row align-items-center no-gutters">
                    <div className="form-group col-md-8">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="newsletter_email"
                        placeholder="Enter Email Address"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="col-md-4 text-end">
                      <button type="submit" className="btn-default">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}

        <div className="site-branding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="site-footer-logo">
                  <img src="images/logo.png" alt="" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="footer-social-link">
                  <ul>
                    <li>
                      <a href="#">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <BsTwitterX />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-menu">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Conatct Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="site-navigation">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="navigation-box">
                  <div className="navigation-contact-box">
                    <div className="content-box-icon">
                      <FaPhone className="react-icon" size={18} />
                    </div>

                    <div className="content-box-body">
                      <h3>Customer Support</h3>
                      <a href="#">+0 123 456 789</a>
                    </div>
                  </div>

                  <div className="navigation-contact-box">
                    <div className="content-box-icon">
                      <MdMailOutline className="react-icon" size={18} />
                    </div>

                    <div className="content-box-body">
                      <h3>Support & Email</h3>
                      <a href="#">info@companyname.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12">
                <p style={{ maxWidth: "100%" }}>
                  Copyright 2024 All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
