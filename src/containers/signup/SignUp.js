import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
function SignUp() {
  return (
    <>
      <Header />
      <section className="signup-section ptb-30">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h3>Sign Up</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="partner-form box-shadow_6">
                <div className="form-top-content ptb-10">
                  <h3>Sign Up</h3>
                  <p>
                    If you already have an account with us, please login at the{' '}
                    <Link to="/login">login page</Link>.
                  </p>
                </div>
                <form action>
                  <div className="contact-form-group">
                    <div className="contact-form-input">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="contact-form-input">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="contact-form-input">
                      <input type="text" placeholder="Password" />
                    </div>
                    <div className="contact-form-input">
                      <input type="text" placeholder="Confirm Password" />
                    </div>
                  </div>
                  <div className="contact-form-btn">
                    <div className="form-submit-btn">
                      <a className="btn btn-primary w-50" href>
                        SignUp
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="signup-img">
                <img src="./assets/images/12545.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SignUp;
