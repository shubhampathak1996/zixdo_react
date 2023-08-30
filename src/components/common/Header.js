import React, { useState } from 'react';
import Topbar from './Topbar';
import { Link } from 'react-router-dom';

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div>
      <Topbar />
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5264331386!2d76.76356463973784!3d28.643684602801585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1693216137614!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}

      <header>
        <div className="container">
          <div className="main-header">
            <div className="logo-wrapper">
              <div className="logo">
                <Link to="/">
                  <img src="/assets/images/logo.png" alt />
                </Link>
              </div>
            </div>
            <div className="navbar">
              <div className="head-mobile-bu">
                <div className="text-center shopping  only-mobile">
                  <i className="fa fa-shopping-cart"></i>
                </div>
                <div
                  className="text-center mobile only-mobile"
                  onClick={() => {
                    setMobileMenu(!mobileMenu);
                  }}
                >
                  <i className={mobileMenu ? 'fa fa-close' : 'fa fa-bars'}></i>
                </div>
              </div>

              <div className="nav-wrapper only-desktop">
                <ul>
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/our-centers">Our Centers</Link>
                  </li>
                  <li>
                    <Link to="/brand-collabs">Brand Collabs</Link>
                  </li>
                  <li>
                    <Link to="/subscription-plan">SUBSCRIPTION PLAN</Link>
                  </li>
                  <li>
                    <Link to="/authorized-partner"> Authorized Partner </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="only-mobile mobile-dropdown"
        style={{ display: mobileMenu ? 'block' : 'none' }}
      >
        <div className="mobile-navbar">
          <ul>
            <li>
              <Link to="/">
                <i className="fa fa-arrow-right"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/our-centers">
                <i className="fa fa-arrow-right"></i> OUR CENTERS
              </Link>
            </li>
            <li>
              <Link to="/brand-collabs">
                <i className="fa fa-arrow-right"></i> BRAND COLLABS
              </Link>
            </li>
            <li>
              <Link to="/subscription-plan">
                <i className="fa fa-arrow-right"></i> SUBSCRIPTION PLAN
              </Link>
            </li>
            <li>
              <Link to="/preferred-partner">
                <i className="fa fa-arrow-right"></i> PREFERRED PARTNER
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
