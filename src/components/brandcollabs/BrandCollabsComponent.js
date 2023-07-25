import React from 'react';

function BrandCollabsComponent() {
  return (
    <div>
      <section className="ptb-60 subscription-plan">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="car-wash-pointers">
                <h3>Car subscription vs buying</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="plan-ul">
                      <ul>
                        <li>Zero down payment &amp; road tax</li>
                        <li>No long term commitment</li>
                        <li>No loan process, no cibil check</li>
                        <li>
                          Doorstep pick &amp; drop for maintenance &amp; service
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="subscribe-box">
                      <div className="subcribe-box-m right">
                        <h5>Subscribe</h5>
                        <ul>
                          <li>
                            <i className="fa fa-check" />
                          </li>
                          <li>
                            <i className="fa fa-check" />
                          </li>
                          <li>
                            <i className="fa fa-check" />
                          </li>
                          <li>
                            <i className="fa fa-check" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="subscribe-box">
                      <div className="subcribe-box-m clsoe">
                        <h5>Buy</h5>
                        <ul>
                          <li>
                            <i className="fa fa-close" />
                          </li>
                          <li>
                            <i className="fa fa-close" />
                          </li>
                          <li>
                            <i className="fa fa-close" />
                          </li>
                          <li>
                            <i className="fa fa-close" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="zixdo-partner-form contact-form-brand">
                <h3>Contact Us</h3>
                <p>Fill the below details to contact us:</p>
                <form>
                  <div className="main-zixdo-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="phone"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Enter your Message Here!"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        defaultValue={''}
                      />
                    </div>
                    <div className="submit-button center">
                      <a href="#" className="btn btn-primary w50">
                        SUBMIT
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrandCollabsComponent;
