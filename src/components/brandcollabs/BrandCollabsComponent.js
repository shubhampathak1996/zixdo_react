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
              <div className="">
                <img src="assets/images/services/brand_collab.jpg" />
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
