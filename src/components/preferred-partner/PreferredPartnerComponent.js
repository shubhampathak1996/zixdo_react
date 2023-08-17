import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { CheckBox, TextInput } from '../../components/Form/Form';
import { Link } from 'react-router-dom';
import { usePrferredPartner } from '../../shared/hooks/UseFetch';

function PreferredPartnerComponent() {
  const {
    preferredParnterMessage,
    AddPrefferedPartner,
    preferred_partner_loading: loading,
  } = usePrferredPartner();
  console.log(preferredParnterMessage, 'preferred partner');
  return (
    <div>
      <section className="authorized-partner-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="authorized-partner-content">
                <h3>
                  Best Franchise Business in Car Cleaning & Disinfectant
                  Services.
                </h3>
                <h5>India's most prominent car wash franchise.</h5>
                <h5 className="mb-3">
                  India's Largest Car Washing Chain | 30+ Location!
                </h5>
                <h6>Benifits of partnership plan</h6>
                <ul>
                  <li>
                    <i className="fa fa-check" />
                    Partners can pool their financial resources to fund the car
                    wash startup costs, equipment purchases, property lease, and
                    marketing efforts. This shared investment allows the
                    business to have a more robust financial foundation.
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    Partners can bring diverse skills and expertise to the
                    table. For instance, one partner might have experience in
                    business management, while another might have technical
                    know-how related to car washing equipment or customer
                    service. This complementary expertise can lead to a more
                    well-rounded and successful business operation.
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    Running a car wash involves various tasks, from managing
                    operations to marketing and administration. By dividing
                    responsibilities among partners based on their strengths,
                    the business can operate more efficiently, ensuring that
                    each aspect receives the necessary attention.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="zixdo-partner-form">
                <h3>Become our zixdo partner</h3>
                <p>To be our partner, fill the given details below:</p>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    mobile_number: '',
                    city: '',
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required('Required'),
                    email: Yup.string().required('Required'),
                    mobile_number: Yup.string().required('Required'),
                    city: Yup.string().required('Required'),
                  })}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    AddPrefferedPartner(values);
                    resetForm();
                    setSubmitting(false);
                  }}
                >
                  {(formik) => {
                    console.log(formik);
                    return (
                      <Form>
                        <div className="main-zixdo-form">
                          <div className="form-group">
                            <TextInput name="name" placeholder="Name" />
                          </div>

                          <div className="form-group">
                            <TextInput name="email" placeholder="Email" />
                          </div>
                          <div className="form-group">
                            <TextInput
                              name="mobile_number"
                              placeholder="Mobile Number"
                            />
                          </div>
                          <div className="form-group">
                            <TextInput name="city" placeholder="City" />
                          </div>

                          <div className="invest-label">
                            <label>Do you have 3-5 lacs to invest</label>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-check">
                                  <CheckBox
                                    className="form-check-input"
                                    name="invest_type_yes"
                                    checked={formik.values.invest_type}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        formik.setFieldValue(
                                          'invest_type',
                                          true
                                        );
                                      }
                                    }}
                                  >
                                    YES
                                  </CheckBox>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-check">
                                  <CheckBox
                                    className="form-check-input"
                                    name="invest_type_no"
                                    checked={!formik.values.invest_type}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        formik.setFieldValue(
                                          'invest_type',
                                          false
                                        );
                                      }
                                    }}
                                  >
                                    NO
                                  </CheckBox>
                                </div>
                              </div>
                            </div>
                          </div>
                          {preferredParnterMessage &&
                            preferredParnterMessage.msg && (
                              <p className="text-success">
                                {preferredParnterMessage.msg}
                              </p>
                            )}
                          <div className="submit-button center">
                            <button href="#" className="btn btn-primary w50">
                              SUBMIT
                            </button>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PreferredPartnerComponent;
