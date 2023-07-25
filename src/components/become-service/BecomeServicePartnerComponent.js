import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { CheckBox, TextInput } from '../../components/Form/Form';
import { Link } from 'react-router-dom';
import {
  UsePrferredPartner,
  usePrferredPartner,
} from '../../shared/hooks/UseFetch';
function BecomeServicePartnerComponent() {
  const {
    preferredParnterMessage,
    AddPrefferedPartner,
    preferred_partner_loading: loading,
  } = usePrferredPartner();
  console.log(preferredParnterMessage, 'preferred partner');
  return (
    <div>
      <section className="become-partner-section ptb-50 bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="partner-form">
                <h3>Become our service partner</h3>
                <p>
                  Best Franchise Business in Car Cleaning & Disinfectant
                  Services.
                </p>
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
                                    name="invest_type"
                                    value="Yes"
                                  >
                                    <label className="form-check-label">
                                      YES
                                    </label>
                                  </CheckBox>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-check">
                                  <CheckBox
                                    className="form-check-input"
                                    name="invest_type"
                                    value="No"
                                  >
                                    <label className="form-check-label">
                                      NO
                                    </label>
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
            <div className="col-md-7">
              <div className="become-part">
                <img src="assets/images/about_img.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BecomeServicePartnerComponent;
