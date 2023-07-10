import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { TextInput, SelectBox, CheckBox } from '../../components/Form/Form';
import * as Yup from 'yup';

function CheckoutComponent() {
  const [customer, setCustomer] = useState(false);
  const [coupan, setCoupan] = useState(false);
  return (
    <div>
      <section className="checkout ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__checkout-inner">
                <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                  <h5>
                    Returning customer?{' '}
                    <a
                      onClick={() => {
                        setCustomer(!customer);
                      }}
                      className="ltn__secondary-color collapsed"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      Click here to login
                    </a>
                  </h5>
                  <div
                    id="ltn__returning-customer-login"
                    className="ltn__checkout-single-content-info "
                    style={{ display: customer ? 'block' : 'none' }}
                  >
                    <div className="ltn_coupon-code-form ltn__form-box">
                      <p>Please login your account.</p>
                      <Formik
                        initialValues={{
                          name: '',
                          password: '',
                        }}
                        validationSchema={Yup.object({
                          name: Yup.string().required('Required'),
                          password: Yup.string().required('Required'),
                        })}
                        onSubmit={async (
                          values,
                          { setSubmitting, resetForm }
                        ) => {
                          setSubmitting(true);

                          resetForm();
                          setSubmitting(false);
                        }}
                      >
                        {(formik) => {
                          console.log(formik);
                          return (
                            <Form>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <TextInput
                                      name="name"
                                      type="text"
                                      placeholder="Enter your name"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <TextInput
                                      name="password"
                                      type="password"
                                      placeholder="Enter your password"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="coupan-remember">
                                <button className="btn btn-primary w15">
                                  Login
                                </button>
                                <label className="input-info-save mb-0">
                                  <input type="checkbox" name="agree" />{' '}
                                  Remember me
                                </label>
                                <p className="mt-30">
                                  <a href="register.html">
                                    Lost your password?
                                  </a>
                                </p>
                              </div>
                            </Form>
                          );
                        }}
                      </Formik>
                    </div>
                  </div>
                </div>
                <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
                  <h5>
                    Have a coupon?
                    <a
                      onClick={() => {
                        setCoupan(!coupan);
                      }}
                      className="ltn__secondary-color "
                      href="#ltn__coupon-code"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      Click here to enter your code
                    </a>
                  </h5>
                  <div
                    id="ltn__coupon-code"
                    className="ltn__checkout-single-content-info "
                  >
                    <div
                      className="ltn__coupon-code-form"
                      style={{ display: coupan ? 'block' : 'none' }}
                    >
                      <p>If you have a coupon code, please apply it below.</p>
                      <Formik
                        initialValues={{
                          coupan_code: '',
                        }}
                        validationSchema={Yup.object({
                          coupan_code: Yup.string().required('Required'),
                        })}
                        onSubmit={async (
                          values,
                          { setSubmitting, resetForm }
                        ) => {
                          setSubmitting(true);

                          resetForm();
                          setSubmitting(false);
                        }}
                      >
                        {(formik) => {
                          console.log(formik);
                          return (
                            <Form>
                              <TextInput
                                name="coupan_code"
                                type="text"
                                placeholder="Enter your Coupon Code"
                                className="form-control"
                              />
                              <button
                                type="submit"
                                className="btn btn-primary mt-4"
                              >
                                Apply Coupon
                              </button>
                            </Form>
                          );
                        }}
                      </Formik>
                    </div>
                  </div>
                </div>
                <Formik
                  initialValues={{
                    full_name: '',
                    email: '',
                    phone: '',
                    vehicle_type: '',
                    Address: '',
                    nearest_store: '',
                  }}
                  validationSchema={Yup.object({
                    full_name: Yup.string().required('Required'),
                    email: Yup.string().required('Required'),
                    phone: Yup.string().required('Required'),
                    vehicle_type: Yup.string().required('Required'),
                    Address: Yup.string().required('Required'),
                    nearest_store: Yup.string().required('Required'),
                  })}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);

                    resetForm();
                    setSubmitting(false);
                  }}
                >
                  {(formik) => {
                    console.log(formik);
                    return (
                      <div className="ltn__checkout-single-content mt-50">
                        <h4 className="title-2">Billing Details</h4>
                        <div className="ltn__checkout-single-content-info">
                          <Form>
                            <h6>Personal Information</h6>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <TextInput
                                    name="full_name"
                                    type="text"
                                    placeholder="Full Name"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <TextInput
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <TextInput
                                    name="phone"
                                    type="number"
                                    placeholder="Phone Number"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <TextInput
                                    name="vehicle_type"
                                    type="text"
                                    placeholder="Which vehicle do you have?"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <TextInput
                                    name="address"
                                    type="text"
                                    placeholder="Enter Your Complete Address"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <select
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                  >
                                    <option>Select Your Nearest Store</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </Form>
                        </div>
                      </div>
                    );
                  }}
                </Formik>
              </div>
            </div>
            <div className="col-md-6">
              <div className="payment-sec mt-50">
                <h4 className="title-2">Payment Method</h4>
                <div className="payment-card">
                  <form>
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
                        Cash Payment
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
                        Online
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="shoping-cart-total mt-50">
              <h4 className="title-2">Cart Totals</h4>
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      Service-1 <strong>× 2</strong>
                    </td>
                    <td>₹298.00</td>
                  </tr>
                  <tr>
                    <td>
                      Service-1 <strong>× 2</strong>
                    </td>
                    <td>₹170.00</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Order Total</strong>
                    </td>
                    <td>
                      <strong>₹633.00</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="center checkout-button w15">
            <button type="submit" className="btn btn-primary">
              Proceed
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CheckoutComponent;
