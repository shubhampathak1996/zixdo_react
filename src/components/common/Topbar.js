import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UseViewCart } from '../../shared/hooks/UseApi';

function Topbar() {
  const { viewCart, view_cart_loading, cartItems } = UseViewCart();
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
    <>
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
                <Link to="/cart" className="d-w  ">
                  <i class="fa fa-shopping-cart"></i>{' '}
                  {cartItems && cartItems.length > 0 && (
                    <span className="card-v">
                      {cartItems && cartItems.length ? cartItems.length : ''}
                    </span>
                  )}
                </Link>
                {isAuthenticated ? (
                  <>
                    <Link to="/my-profile" className="logi">
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
    </>
  );
}

export default Topbar;
