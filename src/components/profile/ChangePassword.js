import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { TextInput } from "../../components/Form/Form";
import { Button } from "bootstrap";
const ChangePassword = () => {
  return (
    <>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          currentPassword: Yup.string().required("Required"),
          newPassword: Yup.string().required("Required"),
          confirmPassword: Yup.string().required("Required"),
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
              <div className="row">
                <div className="col-md-6">
                  <TextInput
                    placeholder="Current Password"
                    name="currentPassword"
                    type="text"
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    placeholder="New Password"
                    name="newPassword"
                    type="text"
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    type="text"
                  />
                </div>
                <div className="col-md-12">
                    <div className="reset-btn">

                  <button type="submit" className="btn btn-primary ">
               Reset Password
                  </button>
                    </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ChangePassword;
