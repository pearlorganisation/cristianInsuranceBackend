import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="main-header" id="hero-section">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src="images/logo.png" alt="Logo" />
              </a>

              <div className="collapse navbar-collapse main-menu">
                <ul className="navbar-nav mr-auto" id="menu">
                  <Link to="/">
                    <li className="nav-item first-menu">Home</li>
                  </Link>
                  <li className="nav-item">
                    <a className="nav-link" href="/aboutus">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/benefits">
                      Benefits
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/blog">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/faq">
                      FAQ
                    </a>
                  </li>

                  {/* <li className="nav-item has-submenu"><a className="nav-link" href="#">Pages</a>
                              <ul className="submenu">									
                                  <li className="nav-item"><a className="nav-link" href="services-/">Service Single</a></li>
                                  <li className="nav-item"><a className="nav-link" href="/">Blog</a></li>
                                  <li className="nav-item"><a className="nav-link" href="blog-/">Blog Details</a></li>
                                  <li className="nav-item"><a className="nav-link" href="/">404</a></li>
                              </ul>
                          </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="/contactus">
                      Conatct Us
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link btn" href="/contactus">
                    Get Started
                    </a>
                  </li> */}
                  {/* <li className="nav-item highlighted-menu"><a className="nav-link" href="/">Contact Us</a></li> */}
                </ul>
              </div>

              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
