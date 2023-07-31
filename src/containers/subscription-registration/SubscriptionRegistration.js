import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  TextInput,
  SelectBox,
  CheckBox,
  TextArea,
} from '../../components/Form/Form';
import * as Yup from 'yup';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { UseSubscriptionRegistration } from '../../shared/hooks/UseFetch';
import { UseLat } from '../../shared/hooks/UseApi';

function SubscriptionRegistration() {
  const { getCentres, centers_loading, centres } = UseLat();
  const [pincode, setPincode] = useState(null);
  const findStoreLocationHandler = () => {
    if (pincode && pincode.length === 6) {
      getCentres({ zip: pincode });
    }
  };
  const {
    subscriptionRegistration,
    AddSubcriptionRegistration,
    subscription_registration_loading,
  } = UseSubscriptionRegistration();
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <section className="checkout ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__checkout-inner">
                <Formik
                  initialValues={{
                    full_name: '',
                    email: '',
                    phone: '',
                    vehicle_type: '',
                    address: '',
                    nearest_store: '',
                    zip: '',
                    payment_option: '',
                  }}
                  validationSchema={Yup.object({
                    full_name: Yup.string().required('Required'),
                    email: Yup.string().required('Required'),
                    phone: Yup.string().required('Required'),
                    vehicle_type: Yup.string().required('Required'),
                    address: Yup.string().required('Required'),
                    zip: Yup.string().required('Required'),
                    // nearest_store: Yup.string().required('Required'),
                  })}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    AddSubcriptionRegistration(values);
                    resetForm();
                    setSubmitting(false);
                  }}
                >
                  {(formik) => {
                    console.log(formik);
                    return (
                      <div className="ltn__checkout-single-content mt-50">
                        <h4 className="title-2">Checkout</h4>
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
                              <div className="col-md-6">
                                <div
                                  className="form-group"
                                  onClick={() => findStoreLocationHandler()}
                                >
                                  <TextInput
                                    name="zip"
                                    type="text"
                                    placeholder="Enter Your Zip Code"
                                    className="form-control"
                                    // onChange={(e) => setPincode(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <TextArea
                                    name="address"
                                    type="text"
                                    placeholder="Enter Your Complete Address"
                                    className="form-control"
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Payment Options</label>
                                  <SelectBox
                                    className="form-control"
                                    name="payment_option"
                                  >
                                    <option value={'select Method'}>
                                      Select Method
                                    </option>
                                    <option value={'Online'}>Online</option>
                                    <option value={'Cash'}>Cash</option>
                                  </SelectBox>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Select Your Nearest Store </label>
                                  <SelectBox
                                    className="form-control"
                                    name="nearest_store"
                                  >
                                    <option
                                      value={'Select Your Nearest Store '}
                                    >
                                      Select Your Nearest Store
                                    </option>
                                    {centres &&
                                      centres.map((data) => {
                                        return (
                                          <option>{data.store_name}</option>
                                        );
                                      })}
                                  </SelectBox>
                                </div>
                              </div>
                            </div>

                            <div className="center checkout-button">
                              <button type="submit" className="btn btn-primary">
                                Place Order
                              </button>
                            </div>
                          </Form>
                        </div>
                      </div>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SubscriptionRegistration;
