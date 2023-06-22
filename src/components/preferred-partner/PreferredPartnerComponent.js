import React from 'react';

function PreferredPartnerComponent() {
  return (
    <div>
      <section className="authorized-partner-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="authorized-partner-content">
                <h3>Why franchise with us? We’re glad you asked.</h3>
                <h6>Benifits of partnership plan</h6>
                <ul>
                  <li>
                    <i className="fa fa-check" />
                    Partnership opportunities with renowned tech giants
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    Partnership opportunities with renowned tech giants
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    Partnership opportunities with renowned tech giants
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    Partnership opportunities with renowned tech giants
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="zixdo-partner-form">
                <h3>Become our zixdo partner</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Non nulla ultrices
                  rhoncus morbi elementum nisi sed.
                </p>
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
                        placeholder="City"
                      />
                    </div>
                    <div className="invest-label">
                      <label>Do you have 3-5 lacs to invest</label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="defaultCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck1"
                        >
                          YES
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="defaultCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="defaultCheck1"
                        >
                          NO
                        </label>
                      </div>
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

export default PreferredPartnerComponent;
