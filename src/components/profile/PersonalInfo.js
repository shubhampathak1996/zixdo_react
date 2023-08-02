import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { TextInput } from "../../components/Form/Form";

const PersonalInfo = () => {
  return (
  <>
  <div className='container'>
    <div className='row'>
        <div className='col-md-12'>
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
                    address: Yup.string().required('Required'),
                    // nearest_store: Yup.string().required('Required'),
                  })}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    // proceedCheckoutHandler(values);
                    resetForm();
                    setSubmitting(false);
                  }}
                >
                  {(formik) => {
                    console.log(formik);
                    return (
                      <div className="ltn__checkout-single-content mt-50">
                     
                        <div className="ltn__checkout-single-content-info">
                          <Form>
                          
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
                            
                            
                            </div>
                         
                            <div className="center checkout-button w50">
                              <button type="submit" className="btn btn-primary">
                                Proceed
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
 
  </>
  )
}

export default PersonalInfo
