import React from 'react';

function Topbar() {
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
                <a href="" className="d-w ">
                  <i class="fa fa-shopping-cart"></i>
                </a>
                <a href="" className="logi">
                  Login / Signup{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Topbar;
