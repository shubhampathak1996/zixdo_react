import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Topbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem('ZIXDO_TOKEN')
      ? window.localStorage.getItem('ZIXDO_TOKEN')
      : null
  );
  const handleLogout = () => {
    window.localStorage.removeItem('ZIXDO_TOKEN');
    window.localStorage.removeItem('ZIXDO_EMAIL');
    setIsAuthenticated(null);
  };
  return (
    <div>
      <section class="top-bar">
        <div class="container">
          <div class="header-top">
            <div class="top-bar-wrapper hea-flex">
              <div className="call-button">
                Call Us:
                <a class="header-top-contact-btn" href="tel:+918055008805">
                  <i class="fa fa-phone"></i> 8055008805
                </a>
              </div>

              <div>
                <Link to="/cart" className="d-w ">
                  <i class="fa fa-shopping-cart"></i>
                </Link>
                {isAuthenticated ? (
                  <>
                    <Link to="/my-account" className="logi">
                      My Account
                    </Link>
                    <a
                      onClick={() => {
                        handleLogout();
                      }}
                      className="logi"
                    >
                      Logout
                    </a>
                  </>
                ) : (
                  <Link to="/login" className="logi">
                    Login / Signup
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Topbar;
