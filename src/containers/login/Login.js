import React from "react";
import Header from "../common/Header";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { TextInput } from "../../components/Form/Form";
import Footer from "../common/Footer";
import {
  useRegisterUser,
  useLoginUser,
  useForgetPassword,
} from "../../shared/hooks/UseAuth";

function Login() {
  const [registerUser] = useRegisterUser();
  const [loginUser] = useLoginUser();
  const [forgetUserPassword] = useForgetPassword();
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
                    username: "",
                    password: "",
                  }}
                  validationSchema={Yup.object({
                    username: Yup.string().required("Required"),
                    password: Yup.string().required("Required"),
                  })}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    await forgetUserPassword(values);
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
                            label="Email"
                            name="username"
                            type="text"
                          />
                        </div>
                        <div className="default-form-box mb-20">
                          <TextInput
                            label="Password"
                            name="password"
                            type="password"
                          />
                        </div>
                        <div className="login_submit">
                          <button className="mb-20" type="submit">
                            login
                          </button>

                          <Link to="/forget-password">Lost your password?</Link>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
            {/*login area start*/}
            {/*register area start*/}
            <div className="col-lg-6 col-md-6">
              <div
                className="account_form register aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <h3>Register</h3>
                <Formik
                  initialValues={{
                    name: "",
                    phone: "",
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object({
                    name: Yup.string().required("Required"),
                    phone: Yup.string().required("Required"),
                    email: Yup.string().required("Required"),
                    password: Yup.string().required("Required"),
                  })}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    await registerUser(values);
                    resetForm();
                    setSubmitting(false);
                  }}
                >
                  {(formik) => {
                    // console.log(formik);
                    return (
                      <Form>
                        <div className="default-form-box mb-20">
                          <TextInput label="Name" name="name" type="text" />
                        </div>
                        <div className="default-form-box mb-20">
                          <TextInput label="Phone" name="phone" type="text" />
                        </div>
                        <div className="default-form-box mb-20">
                          <TextInput label="Email" name="email" type="text" />
                        </div>
                        <div className="default-form-box mb-20">
                          <TextInput
                            label="Password"
                            name="password"
                            type="password"
                          />
                        </div>
                        <div className="login_submit">
                          <button className="mb-20" type="submit">
                            Register
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
            {/*register area end*/}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
