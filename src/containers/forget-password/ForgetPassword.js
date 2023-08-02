import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { TextInput } from '../../components/Form/Form';
import {UseForgetPassword} from '../../shared/hooks/UseFetch'

function ForgetPassword() {
  const {forgetPassword,forget_loading,GetforgetPassword} = UseForgetPassword()

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
              <Formik
                                   initialValues={{
                                     email: "",
                                   }}
                                   validationSchema={Yup.object({
                                     email: Yup.string().required("Required"),
                                   })}
                                   onSubmit={async (
                                     values,
                                     { setSubmitting, resetForm }
                                   ) => {
                                     setSubmitting(true);
             
                                     resetForm();
                                     setSubmitting(true);
                                     const formData = new FormData();
                                     formData.append('email', values.email);
                                    
                                     await GetforgetPassword(formData, values.email);
                                   }}
                                 >
                                   {(formik) => {
                                     console.log(formik);
                                     return (
                                      <Form>
                                      <div className="contact-form-group">
                                        <div className="contact-form-input">
                                          <input
                                            type="text"
                                            name="email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                            placeholder="Email Address"
                                          />
                                          {formik.errors && formik.errors.email && (
                                            <span className="text-danger">
                                              {formik.errors.email}
                                            </span>
                                          )}
                                        </div>
                                     
                
                                      </div>
                                      { forgetPassword && (
                          <p
                            className={
                              forgetPassword.status == 200
                                ? 'text-success'
                                : 'text-danger'
                            }
                          >
                            {forgetPassword.msg}
                          </p>
                        )}
                                      <div className="contact-form-btn">
                                        <div className="form-submit-btn">
                                          <button
                                            type="submit"
                                            className="btn btn-primary w-50"
                                          >
                                            Submit
                                          </button>
                                        </div>
                                      </div>
                                      <div className='text-center mt-3'>
                                        <a href='/login' className=' text-white p-2' style={
                                          {background:"#007cc0"}
                                        }>Login</a>
                                      </div>
                                      {/* <div className='login-forget-password'>
                                  <Link to='/forget-password'>Forgot Password!</Link>
                                </div> */}
                                    </Form>
                                     );
                                   }}
                                 </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgetPassword;
