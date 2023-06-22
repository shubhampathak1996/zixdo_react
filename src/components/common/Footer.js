import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-inside-box">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-content">
                  <div className="footer-logo">
                    <img src="./assets/images/logo.png" alt />
                  </div>
                </div>
                <div className="footer-content">
                  <p>
                    Zixdo Technologies Private Limited is the India's most
                    prominent car wash franchise business. We provide car
                    washing services near you all over India. Our services are
                    car washing, cleaning, interior and exterior dusting,
                    shampooing, detailing and sanitizing of vehicle at your
                    place.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer-content">
                      <div className="footer-heading">
                        <h4>Main Links</h4>
                      </div>
                      <div className="footer-pointers">
                        <div className="footer-bullet-points">
                          <ul>
                            <li>
                              <Link to="/">
                                {' '}
                                <i className="fa fa-arrow-right" /> HOME
                              </Link>
                            </li>
                            <li>
                              <Link to="/our-centers">
                                {' '}
                                <i className="fa fa-arrow-right" /> Our Centers
                              </Link>
                            </li>
                            <li>
                              <Link to="/brand-collabs">
                                {' '}
                                <i className="fa fa-arrow-right" /> Brand
                                Collabs
                              </Link>
                            </li>
                            <li>
                              <Link to="/subscription-plan">
                                {' '}
                                <i className="fa fa-arrow-right" />
                                SUBSCRIPTION PLAN
                              </Link>
                            </li>
                            <li>
                              <Link to="/preferred-partner">
                                {' '}
                                <i className="fa fa-arrow-right" /> Preferred
                                PARTNER
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-content">
                      <div className="footer-heading">
                        <h4>Leaarn More</h4>
                      </div>
                      <div className="footer-pointers">
                        <div className="footer-bullet-points">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-arrow-right" /> ABOUT US
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-arrow-right" /> PRIVACY
                                POLICY
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-arrow-right" /> TERMS &amp;
                                CONDITIONS
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-arrow-right" /> REFUND
                                POLICY
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-arrow-right" /> WASHING
                                CENTERS
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-content">
                  <div className="footer-location">
                    <div className="location-icon">
                      <img src="./assets/images/Location_1.png" alt />
                    </div>
                    <div className="location-text">
                      Zixdo Technologies Private Limited, D-485 KH NO-29/8 RAM
                      PHAL CHOWK PALAM EXTN SEC-7 DWARKA DELHI New Delhi DL
                      110075 IN
                    </div>
                  </div>
                  <div className="footer-phone">
                    <div className="phone-icon">
                      <img src="./assets/images/Ringer_Volume.png" alt />
                    </div>
                    <div className="phone-text">
                      <a href="tel:8055008805">805-5 00-88 05</a>
                    </div>
                  </div>
                  <div className="search-bar-section ptb-20">
                    <input type="text" placeholder="Type Your Email" />
                    <div className="search-btn-footer">
                      <a href className="btn btn-primary">
                        {' '}
                        Search{' '}
                      </a>
                    </div>
                  </div>
                  <div className="footer-social-links">
                    <div className="social-links">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <section className="footer-bottom">
                <div className="row">
                  <div className="col-md-10">
                    <div className="footer-bottom-text">
                      <p>
                        {' '}
                        copyright © 2020-2023 Zixdo Technologies Private Limited
                        www.zixdo.com
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="footer-play-img">
                      <img
                        src="./assets/images/zixdo-google-playstore 1.png"
                        alt
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
