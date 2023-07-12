import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { UseAuthenticated, UseLogin } from '../../shared/hooks/UseFetch';
import { useHistory } from 'react-router-dom';
function Login() {
  const { loginUser, login_loading, loginData } = UseLogin();
  const { isAuthenticated } = UseAuthenticated();
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/my-account');
    }
  }, [isAuthenticated]);

  return (
    <>
      <section className='signup-section ptb-30'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-heading'>
                <h3>Login</h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='partner-form box-shadow_6'>
                <div className='form-top-content ptb-10'>
                  <h3>Login</h3>
                  <p>
                    Don't have an account? <Link to='/register'>Sign Up</Link>
                  </p>
                </div>
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string().required('Required'),
                    password: Yup.string().required('Required'),
                  })}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    const formData = new FormData();
                    formData.append('email', values.email);
                    formData.append('password', values.password);
                    await loginUser(formData);
                    resetForm();
                    setSubmitting(false);
                  }}
                >
                  {(formik) => {
                    console.log(formik);
                    return (
                      <Form>
                        <div className='contact-form-group'>
                          <div className='contact-form-input'>
                            <input
                              type='text'
                              name='email'
                              onChange={formik.handleChange}
                              value={formik.values.email}
                              placeholder='Email Address'
                            />
                            {formik.errors && formik.errors.email && (
                              <span className='text-danger'>
                                {formik.errors.email}
                              </span>
                            )}
                          </div>
                          <div className='contact-form-input'>
                            <input
                              type='password'
                              name='password'
                              onChange={formik.handleChange}
                              value={formik.values.password}
                              placeholder='Password'
                            />
                            {formik.errors && formik.errors.password && (
                              <span className='text-danger'>
                                {formik.errors.password}
                              </span>
                            )}
                          </div>
                        </div>
                        {!login_loading && loginData && (
                          <p
                            className={
                              loginData.status === 200
                                ? 'text-success'
                                : 'text-danger'
                            }
                          >
                            {loginData.msg}
                          </p>
                        )}
                        <div className='contact-form-btn'>
                          <div className='form-submit-btn'>
                            <button
                              type='submit'
                              className='btn btn-primary w-50'
                            >
                              Login
                            </button>
                          </div>
                        </div>
                        {/* <div className='login-forget-password'>
                    <Link to='/forget-password'>Forgot Password!</Link>
                  </div> */}
                      </Form>
                    );
                  }}
                </Formik>
              </div>
              {/* <div className="guest-login-box box-shadow_6 ptb-20 mt-20">
                <div className="guest-login-content">
                  Continue as <a href>Guest</a>
                </div>
                <div className="contact-form-btn">
                  <div className="form-submit-btn-guest">
                    <a className="btn btn-primary">Guest Login</a>
                  </div>
                </div>
              </div> */}
            </div>
            <div className='col-md-6'>
              <div className='signup-img'>
                <img src='./assets/images/12544.jpg' alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
