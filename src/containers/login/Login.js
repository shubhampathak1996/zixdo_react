import React from 'react';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
      <section className="signup-section ptb-30">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h3>Login</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="partner-form box-shadow_6">
                <div className="form-top-content ptb-10">
                  <h3>Login</h3>
                  <p>
                    Don't have an account?{' '}
                    <Link to="/register" href>
                      Sign Up page
                    </Link>
                    .
                  </p>
                </div>
                <form action>
                  <div className="contact-form-group">
                    <div className="contact-form-input">
                      <input type="text" placeholder="Email Address" />
                    </div>
                    <div className="contact-form-input">
                      <input type="text" placeholder="Password" />
                    </div>
                  </div>
                  <div className="contact-form-btn">
                    <div className="form-submit-btn">
                      <a className="btn btn-primary w-50">Login</a>
                    </div>
                  </div>
                  <div className="login-forget-password">
                    <Link to="/forget-password">Forgot Password!</Link>
                  </div>
                </form>
              </div>
              <div className="guest-login-box box-shadow_6 ptb-20 mt-20">
                <div className="guest-login-content">
                  Continue as <a href>Guest</a>
                </div>
                <div className="contact-form-btn">
                  <div className="form-submit-btn-guest">
                    <a className="btn btn-primary">Guest Login</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="signup-img">
                <img src="./assets/images/12544.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
