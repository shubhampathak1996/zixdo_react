import React from "react";
import Header from "../common/Header";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { TextInput } from "../../components/Form/Form";
import Footer from "../common/Footer";
import { useForgetPassword } from "../../shared/hooks/UseAuth";

function ForgetPassword() {
  const [forgetPassword] = useForgetPassword();
  return (
    <div>
      <Header />
      <div className="customer_login mt-50">
        <div className="container">
          <div className="row">
            {/*login area start*/}
            <div className="col-lg-6 col-md-6">
              <div
                className="account_form aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={0}
              >
                <h3>Forget Password</h3>
                <Formik
                  initialValues={{
                    email: "",
                  }}
                  validationSchema={Yup.object({
                    email: Yup.string().required("Required"),
                  })}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    await forgetPassword(values);
                    resetForm();
                    setSubmitting(false);
                  }}
                >
                  {(formik) => {
                    console.log(formik);
                    return (
                      <Form>
                        <div className="default-form-box mb-20">
                          <TextInput
                            label="Enter your email"
                            name="email"
                            type="text"
                          />
                        </div>

                        <div className="login_submit">
                          <button className="mb-20" type="submit">
                            Send Password Reset Link
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
      </div>
      <Footer />
    </div>
  );
}

export default ForgetPassword;
