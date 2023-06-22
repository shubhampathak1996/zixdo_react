import React from 'react';

function BecomeServicePartnerComponent() {
  return (
    <div>
      <section className="become-partner-section ptb-50 bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="partner-form">
                <h3>Become our service partner</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <form className="partner-main-form" action>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="form-group">
                    <label>Do you have 3-5 lacs to invest </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="option1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        YES
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="option1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        NO
                      </label>
                    </div>
                  </div>
                  <div className="contact-form-btn">
                    <div className="form-submit-btn">
                      <a href className="btn btn-primary w50">
                        Submit
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-7">
              <div className="become-part">
                <img src="assets/images/about_img.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BecomeServicePartnerComponent;
