import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaStar,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";

const Home = () => {
  return (
    <>
      {/* <div className="preloader">
      <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon"><img src="images/loader.svg" alt="" /></div>
      </div>
  </div> */}

      {/* <div id="magic-cursor">
      <div id="ball"></div>
    </div> */}

      

      <div className="hero parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="section-title">
                <h3 className="wow fadeInUp" data-wow-delay="0.25s">
                  Insurance
                </h3>
                <h1 className="text-anime">
                  You are Ready to Get Your Insurance
                </h1>
              </div>

              <div className="hero-body">
                <p className="wow fadeInUp" data-wow-delay="0.50s">
                  Get peace of mind with our comprehensive insurance coverage
                  tailored to your needs. From home and auto to life and health,
                  we've got you covered. Explore our range of policies and find
                  the perfect fit for your family's security.
                </p>
                <a
                  href="#"
                  className="btn-default hero-btn wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <iframe
                style={{ borderRadius: "12px" }}
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/gVQo-F8TVuk?si=_ywMAh0AuAqiFQU0&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="home-info-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="info-box wow fadeInUp" data-wow-delay="0.50s">
                <div className="box-icon">
                  <img src="images/icon-peace-of-mind.svg" alt="" />
                </div>
                <div className="box-body">
                  <h3>Peace of Mind</h3>
                  <p>Phasellus fermentum congue arcu.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="info-box wow fadeInUp" data-wow-delay="0.75s">
                <div className="box-icon">
                  <img src="images/icon-tailored-cover.svg" alt="" />
                </div>
                <div className="box-body">
                  <h3>Tailored Cover</h3>
                  <p>Phasellus fermentum congue arcu.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="info-box wow fadeInUp" data-wow-delay="1.0s">
                <div className="box-icon">
                  <img src="images/icon-24-7-support.svg" alt="" />
                </div>
                <div className="box-body">
                  <h3>24/7 Support</h3>
                  <p>Phasellus fermentum congue arcu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1 order-2">
              <div
                className="about-video wow fadeInLeft"
                data-wow-delay="0.25s"
              >
                <figure className="image-anime">
                  <img src="images/video-placeholder.jpg" alt="" />
                </figure>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 order-lg-2 order-1">
              <div className="about-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp" data-wow-delay="0.25s">
                    About Us
                  </h3>
                  <h2 className="text-anime">
                    Reliable Insurance For Any Purpose
                  </h2>
                </div>

                <div className="about-body">
                  <p className="wow fadeInUp" data-wow-delay="0.50s">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>

                <div className="about-icon-box">
                  <div className="icon-box wow fadeInUp" data-wow-delay="0.75s">
                    <img src="images/icon-secure-services.svg" alt="" />
                    <h3>100 Secure Services</h3>
                  </div>

                  <div className="icon-box wow fadeInUp" data-wow-delay="1.0s">
                    <img src="images/icon-money-back.svg" alt="" />
                    <h3>Anytime Money Back</h3>
                  </div>
                </div>

                <div className="about-btn">
                  <a
                    href="/"
                    className="btn-default wow fadeInUp"
                    data-wow-delay="1.25s"
                  >
                    read More
                  </a>
                  {/* <div
                  className="about-contact-btn wow fadeInUp"
                  data-wow-delay="1.50s"
                >
                  <img src="images/home-contact-bg.png" alt="" />
                  <a href="#" className="contact-btn">
                    <i className="fa-solid fa-phone"></i>
                    <strong>Contact Us:</strong> +0123 456 789
                  </a>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-service">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h3 className="wow fadeInUp" data-wow-delay="0.25s">
                  Our Services
                </h3>
                <h2 className="text-anime">What we are Offering</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="step-box wow fadeInUp" data-wow-delay="0.50s">
                <div className="step-img">
                  <figure className="image-anime">
                    <img src="images/services-1.jpg" alt="" />
                  </figure>
                </div>

                <div className="step-body">
                  <div className="step-icon">
                    <img src="images/icon-services-1.svg" alt="" />
                  </div>

                  <h3>Health Insurance</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                  <a href="services-/" className="btn-read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="step-box wow fadeInUp" data-wow-delay="0.75s">
                <div className="step-img">
                  <figure className="image-anime">
                    <img src="images/services-2.jpg" alt="" />
                  </figure>
                </div>

                <div className="step-body">
                  <div className="step-icon">
                    <img src="images/icon-services-2.svg" alt="" />
                  </div>

                  <h3>Car Insurance</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                  <a href="services-/" className="btn-read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="step-box wow fadeInUp" data-wow-delay="1.0s">
                <div className="step-img">
                  <figure className="image-anime">
                    <img src="images/services-3.jpg" alt="" />
                  </figure>
                </div>

                <div className="step-body">
                  <div className="step-icon">
                    <img src="images/icon-services-3.svg" alt="" />
                  </div>

                  <h3>Home Insurance</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                  <a href="services-/" className="btn-read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div
                className="service-btn text-center wow fadeInUp"
                data-wow-delay="0.50s"
              >
                <a href="/" className="btn-default">
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="get-consulations">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="consulations-img text-lg-start text-center wow fadeInUp"
                data-wow-delay="0.50s"
              >
                <img src="images/get-consulations.png" alt="" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="consulations-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp" data-wow-delay="0.25s">
                    Get Consultations
                  </h3>
                  <h2 className="text-anime">
                    5 Years of Excellence in The Insurance Industry.
                  </h2>
                </div>

                <div className="consulations-body">
                  <p className="wow fadeInUp" data-wow-delay="0.50s">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500.
                  </p>
                </div>

                <div className="list-icon wow fadeInUp" data-wow-delay="0.75s">
                  <ul>
                    <li>
                      <span>01.</span> can save your money.
                    </li>
                    <li>
                      <span>02.</span> Our life insurance is flexible
                    </li>
                  </ul>
                </div>

                <a
                  href="contact-/"
                  className="btn-default wow fadeInUp"
                  data-wow-delay="1.0s"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="counter-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="counter-box wow fadeInUp" data-wow-delay="0.50s">
                <div className="counter-img">
                  <img src="images/icon-happy-customers.svg" alt="" />
                </div>
                <div className="counter-body">
                  <h3>
                    <span className="counter">1150</span>+
                  </h3>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="counter-box wow fadeInUp" data-wow-delay="0.75s">
                <div className="counter-img">
                  <img src="images/icon-insurance-careers.svg" alt="" />
                </div>
                <div className="counter-body">
                  <h3>
                    <span className="counter">150</span>+
                  </h3>
                  <p>Insurance Careers</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="counter-box wow fadeInUp" data-wow-delay="1.0s">
                <div className="counter-img">
                  <img src="images/icon-awards-won.svg" alt="" />
                </div>
                <div className="counter-body">
                  <h3>
                    <span className="counter">15</span>+
                  </h3>
                  <p>Awards Won</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="counter-box wow fadeInUp" data-wow-delay="1.25s">
                <div className="counter-img">
                  <img src="images/icon-claims-settled.svg" alt="" />
                </div>
                <div className="counter-body">
                  <h3>
                    <span className="counter">2000</span>+
                  </h3>
                  <p>Claims Settled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-team-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h3 className="wow fadeInUp" data-wow-delay="0.25s">
                  Our Team
                </h3>
                <h2 className="text-anime">Meet Our Experienced Team</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-12">
              <div
                className="team-member-card text-center wow fadeInUp"
                data-wow-delay="0.50s"
              >
                <div className="team-img">
                  <figure className="image-anime">
                    <img src="images/team-1.jpg" alt="" />
                  </figure>

                  {/* <div className="our-team-social-icon">
                  <ul>
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
                </div>

                <div className="team-content">
                  <h3>Michael Johnson</h3>
                  <p>founder</p>
                  <div className="divider-separator"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div
                className="team-member-card text-center wow fadeInUp"
                data-wow-delay="0.75s"
              >
                <div className="team-img">
                  <figure className="image-anime">
                    <img src="images/team-2.jpg" alt="" />
                  </figure>

                  {/* <div className="our-team-social-icon">
                  <ul>
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
                </div>

                <div className="team-content">
                  <h3>Jessica Anderson</h3>
                  <p>co-founder & CEO</p>
                  <div className="divider-separator"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div
                className="team-member-card text-center wow fadeInUp"
                data-wow-delay="1.0s"
              >
                <div className="team-img">
                  <figure className="image-anime">
                    <img src="images/team-3.jpg" alt="" />
                  </figure>

                  {/* <div className="our-team-social-icon">
                  <ul>
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-icon">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
                </div>

                <div className="team-content">
                  <h3>Brian Wilson</h3>
                  <p>Claims Representative</p>
                  <div className="divider-separator"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-us parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="why-choose-img">
                <figure className="reveal image-anime">
                  <img src="images/why-choose-us-img.jpg" alt="" />
                </figure>
              </div>
            </div>

            <div className="col-lg-7 col-12">
              <div className="section-title">
                <h3 className="wow fadeInUp" data-wow-delay="0.25s">
                  Why Choose us
                </h3>
                <h2 className="text-anime">
                  Why you should choose Our Services?
                </h2>
              </div>

              <div className="why-choose-body">
                <p className="wow fadeInUp" data-wow-delay="0.50s">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500.
                </p>

                <ul
                  className="why-choose-list wow fadeInUp"
                  data-wow-delay="0.75s"
                >
                  <li>100% Safe Money</li>
                  <li>Save your Money</li>
                  <li>Fast Process</li>
                  <li>Easy Process System</li>
                  <li>Anytime Money Back</li>
                  <li>Digital Insurance Policy</li>
                </ul>

                {/* <div
                className="support-team-section wow fadeInUp"
                data-wow-delay="1.0s"
              >
                <div className="video-section">
                  <div className="video-section-img">
                    <figure className="image-anime">
                      <img src="images/why-choose-us-video-img.jpg" alt="" />
                    </figure>
                  </div>
                  <div className="video-section-play-btn">
                    <a
                      href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                      className="popup-video"
                    >
                      <i className="fa-regular fa-circle-play"></i>
                    </a>
                  </div>
                </div>

                <div className="support-team-body">
                  <img src="images/icon-support-team.svg" alt="" />
                  <h3>24/7 Support Team</h3>

                  <ul className="support-team-contact">
                    <li>
                      <a href="#" className="contact-btn">
                        +0123 456 789
                      </a>
                    </li>
                    <li>
                      <a href="#" className="support-mail-btn">
                        info@domain.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h3 className="wow fadeInUp" data-wow-delay="0.25s">
                  Testimonials
                </h3>
                <h2 className="text-anime">Why Client trust Us</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="testimonial-slider-wrapper wow fadeInUp"
                data-wow-delay="0.50s"
              >
                <div className="swiper testimonial-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-slide">
                        <div className="testimonial-header">
                          <figure className="image-anime">
                            <img src="images/author-1.jpg" alt="" />
                          </figure>
                          <h3>Alison Miller</h3>
                        </div>

                        <div className="testimonial-body">
                          <p>
                            Phasellus massa felis, malesuada ac egestas nec,
                            bibendum ut diam. In tellus augue, imperdiet eu
                            porttitor sed, eleifend a felis.
                          </p>
                        </div>

                        <div className="testimonial-footer">
                          <div className="rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-slide">
                        <div className="testimonial-header">
                          <figure className="image-anime">
                            <img src="images/author-2.jpg" alt="" />
                          </figure>
                          <h3>Michelle Johnson</h3>
                        </div>

                        <div className="testimonial-body">
                          <p>
                            Phasellus massa felis, malesuada ac egestas nec,
                            bibendum ut diam. In tellus augue, imperdiet eu
                            porttitor sed, eleifend a felis.
                          </p>
                        </div>

                        <div className="testimonial-footer">
                          <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-slide">
                        <div className="testimonial-header">
                          <figure className="image-anime">
                            <img src="images/author-3.jpg" alt="" />
                          </figure>
                          <h3>Noah Davis</h3>
                        </div>

                        <div className="testimonial-body">
                          <p>
                            Phasellus massa felis, malesuada ac egestas nec,
                            bibendum ut diam. In tellus augue, imperdiet eu
                            porttitor sed, eleifend a felis.
                          </p>
                        </div>

                        <div className="testimonial-footer">
                          <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-slide">
                        <div className="testimonial-header">
                          <figure className="image-anime">
                            <img src="images/author-4.jpg" alt="" />
                          </figure>
                          <h3>Mason Smith</h3>
                        </div>

                        <div className="testimonial-body">
                          <p>
                            Phasellus massa felis, malesuada ac egestas nec,
                            bibendum ut diam. In tellus augue, imperdiet eu
                            porttitor sed, eleifend a felis.
                          </p>
                        </div>

                        <div className="testimonial-footer">
                          <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-slide">
                        <div className="testimonial-header">
                          <figure className="image-anime">
                            <img src="images/author-5.jpg" alt="" />
                          </figure>
                          <h3>Lily Tatiana</h3>
                        </div>

                        <div className="testimonial-body">
                          <p>
                            Phasellus massa felis, malesuada ac egestas nec,
                            bibendum ut diam. In tellus augue, imperdiet eu
                            porttitor sed, eleifend a felis.
                          </p>
                        </div>

                        <div className="testimonial-footer">
                          <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-articles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center">
                <h3 className="wow fadeInUp" data-wow-delay="0.25s">
                  Blog & News
                </h3>
                <h2 className="text-anime">Explore Our Newest Articles</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="post-item wow fadeInUp" data-wow-delay="0.50s">
                <div className="post-header">
                  <div className="feature-img">
                    <a href="blog-/">
                      <figure className="image-anime">
                        <img src="images/post-1.jpg" alt="" />
                      </figure>
                    </a>
                  </div>

                  <div className="post-meta">
                    <ul>
                      <li>Business Insurance</li>
                    </ul>
                  </div>
                </div>

                <div className="post-content">
                  <div className="post-header">
                    <h2>
                      <a href="blog-/">Understanding Your Insurance Coverage</a>
                    </h2>

                    <p>
                      In today's complex world, understanding your insurance
                      coverage is more important than ever.
                    </p>

                    <a href="blog-/" className="btn-read-more">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="post-item wow fadeInUp" data-wow-delay="0.75s">
                <div className="post-header">
                  <div className="feature-img">
                    <a href="blog-/">
                      <figure className="image-anime">
                        <img src="images/post-2.jpg" alt="" />
                      </figure>
                    </a>
                  </div>

                  <div className="post-meta">
                    <ul>
                      <li>Home Insurance</li>
                    </ul>
                  </div>
                </div>

                <div className="post-content">
                  <div className="post-header">
                    <h2>
                      <a href="blog-/">
                        Tips for Choosing the Right Insurance Policy
                      </a>
                    </h2>

                    <p>
                      In today's complex world, understanding your insurance
                      coverage is more important than ever.
                    </p>

                    <a href="blog-/" className="btn-read-more">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="post-item wow fadeInUp" data-wow-delay="1.0s">
                <div className="post-header">
                  <div className="feature-img">
                    <a href="blog-/">
                      <figure className="image-anime">
                        <img src="images/post-3.jpg" alt="" />
                      </figure>
                    </a>
                  </div>

                  <div className="post-meta">
                    <ul>
                      <li>Car Insurance</li>
                    </ul>
                  </div>
                </div>

                <div className="post-content">
                  <div className="post-header">
                    <h2>
                      <a href="blog-/">
                        How to Safeguard Your Financial Well-being
                      </a>
                    </h2>

                    <p>
                      In today's complex world, understanding your insurance
                      coverage is more important than ever.
                    </p>

                    <a href="blog-/" className="btn-read-more">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Home;
