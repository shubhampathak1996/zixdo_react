import React from 'react';

function ForgetPassword() {
  return (
    <>
      <section className="signup-section ptb-30">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 mx-auto">
              <div className="partner-form box-shadow_6">
                <div className="form-top-content ptb-10">
                  <h3>Forgot Password</h3>
                  <p>
                    Enter the email address that you used to register with
                    Zixdo. We'll send you an email to reset your password.
                  </p>
                </div>
                <form action>
                  <div className="contact-form-group">
                    <div className="contact-form-input">
                      <input
                        type="text"
                        placeholder="Please Enter Your Email"
                      />
                    </div>
                    <div className="contact-form-btn">
                      <div className="form-submit-btn">
                        <a className="btn btn-primary w-50" href>
                          Submit
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgetPassword;
