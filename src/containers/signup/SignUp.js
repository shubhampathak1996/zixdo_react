import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { UseRegister } from '../../shared/hooks/UseFetch';
function SignUp() {
  const { registerUser, register_loading, registerData } = UseRegister();
  return (
    <>
      <Header />
      <section className='signup-section ptb-30'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-heading'>
                <h3>Sign Up</h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='partner-form box-shadow_6'>
                <div className='form-top-content ptb-10'>
                  <h3>Sign Up</h3>
                  <p>
                    If you already have an account with us, please login at the{' '}
                    <Link to='/login'>login page</Link>.
                  </p>
                </div>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required('Required'),
                    email: Yup.string().email().required('Required'),
                    password: Yup.string().required('Required'),
                    confirm_password: Yup.string().required('Required'),
                  })}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    const formData = new FormData();
                    formData.append('name', values.name);
                    formData.append('email', values.email);
                    formData.append('password', values.password);
                    await registerUser(formData);
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
                              name='name'
                              placeholder='Name'
                              value={formik.values.name}
                              onChange={formik.handleChange}
                            />
                            {formik.errors && formik.errors.name && (
                              <span className='text-danger'>
                                {' '}
                                {formik.errors.name}{' '}
                              </span>
                            )}
                          </div>
                          <div className='contact-form-input'>
                            <input
                              type='text'
                              name='email'
                              value={formik.values.email}
                              placeholder='Email'
                              onChange={formik.handleChange}
                            />
                            {formik.errors && formik.errors.email && (
                              <span className='text-danger'>
                                {' '}
                                {formik.errors.email}{' '}
                              </span>
                            )}
                          </div>
                          <div className='contact-form-input'>
                            <input
                              type='password'
                              name='password'
                              placeholder='Password'
                              value={formik.values.password}
                              onChange={formik.handleChange}
                            />
                            {formik.errors && formik.errors.password && (
                              <span className='text-danger'>
                                {' '}
                                {formik.errors.password}{' '}
                              </span>
                            )}
                          </div>
                          <div className='contact-form-input'>
                            <input
                              type='password'
                              name='confirm_password'
                              placeholder='Confirm Password'
                              onChange={formik.handleChange}
                            />
                            {formik.errors &&
                              formik.errors.confirm_password && (
                                <span className='text-danger'>
                                  {' '}
                                  {formik.errors.confirm_password}{' '}
                                </span>
                              )}
                          </div>
                        </div>
                        {!register_loading && registerData && (
                          <p
                            className={
                              registerData.status === 200
                                ? 'text-success'
                                : 'text-danger'
                            }
                          >
                            {' '}
                            {registerData.msg}{' '}
                          </p>
                        )}
                        <div className='contact-form-btn'>
                          <div className='form-submit-btn'>
                            <button className='btn btn-primary w-50'>
                              Sign Up
                            </button>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='signup-img'>
                <img src='./assets/images/12545.jpg' alt />
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
