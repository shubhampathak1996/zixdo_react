import React from 'react';

function WhySectionWhite() {
  return (
    <>
      <section className="how-we-work-section  subscription">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="how-we-work-section-heading">
                <h3>How we work</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur. Non nulla ultrices
                  rhoncus morbi elementum nisi sed.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row ptb-30">
            <div className="col-md-4">
              <div className="book-service-card">
                <div className="service-icon">
                  <img src="/assets/images/calendar_1.png" alt />
                </div>
                <div className="service-card-heading">
                  Create your page on Zixdo
                </div>
                <div className="service-card-content">
                  Help users discover your place by creating a listing on Zixdo
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="book-service-card">
                <div className="service-icon">
                  <img src="/assets/images/shine_1.png" alt />
                </div>
                <div className="service-card-heading">
                  Register for online ordering
                </div>
                <div className="service-card-content">
                  And deliver orders to millions of customers with ease
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="book-service-card">
                <div className="service-icon">
                  <img src="/assets/images/payment_1.png" alt />
                </div>
                <div className="service-card-heading">
                  Start receiving orders online
                </div>
                <div className="service-card-content">
                  Manage orders on our partner app, web dashboard or API
                  partners Lorem ipsum dolor sit amet consectetur. Non nulla
                  ultrices rhoncus morbi elementum nisi sed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhySectionWhite;
