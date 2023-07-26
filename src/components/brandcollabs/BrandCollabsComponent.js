import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { CheckBox, TextArea, TextInput } from '../../components/Form/Form';
function BrandCollabsComponent() {
  return (
    <div>
      <section className="ptb-60 subscription-plan">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="car-wash-pointers">
                <h3>Car subscription vs buying</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="plan-ul">
                      <ul>
                        <li>Zero down payment &amp; road tax</li>
                        <li>No long term commitment</li>
                        <li>No loan process, no cibil check</li>
                        <li>
                          Doorstep pick &amp; drop for maintenance &amp; service
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="subscribe-box">
                      <div className="subcribe-box-m right">
                        <h5>Subscribe</h5>
                        <ul>
                          <li>
                            <i className="fa fa-check" />
                          </li>
                          <li>
                            <i className="fa fa-check" />
                          </li>
                          <li>
                            <i className="fa fa-check" />
                          </li>
                          <li>
                            <i className="fa fa-check" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="subscribe-box">
                      <div className="subcribe-box-m clsoe">
                        <h5>Buy</h5>
                        <ul>
                          <li>
                            <i className="fa fa-close" />
                          </li>
                          <li>
                            <i className="fa fa-close" />
                          </li>
                          <li>
                            <i className="fa fa-close" />
                          </li>
                          <li>
                            <i className="fa fa-close" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="zixdo-partner-form contact-form-brand">
                <h3>Contact Us</h3>
                <p>Fill the below details to contact us:</p>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    company_name: '',
                    message: '',
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required('Required'),
                    email: Yup.string().required('Required'),
                    phone: Yup.string().required('Required'),
                    company_name: Yup.string().required('Required'),
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
                      <Form>
                        <div className="main-zixdo-form">
                          <div className="form-group">
                            <TextInput name="name" placeholder="Name" />
                          </div>
                          <div className="form-group">
                            <TextInput
                              name="email"
                              placeholder="Email
                            "
                            />
                          </div>
                          <div className="form-group">
                            <TextInput
                              name="phone"
                              placeholder="Mobile Number
                            "
                            />
                          </div>
                          <div className="form-group">
                            <TextInput
                              name="company_name"
                              placeholder="Company Name
                            "
                            />
                          </div>
                          <TextArea name="message" placeholder="Message" />
                        </div>
                        <div className="submit-button center">
                          <button type="submit" className="btn btn-primary w50">
                            SUBMIT
                          </button>
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

export default BrandCollabsComponent;
