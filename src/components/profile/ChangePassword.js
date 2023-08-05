import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { TextInput } from '../../components/Form/Form';
import { Button } from 'bootstrap';
const ChangePassword = ({ userData, user_loading, resetUserPassword }) => {
  return (
    <>
      <Formik
        initialValues={{
          password: '',

          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          password: Yup.string().required('Required'),
          confirmPassword: Yup.string().required('Required'),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          resetUserPassword(values.password);
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
                    placeholder="New Password"
                    name="password"
                    type="password"
                  />
                </div>

                <div className="col-md-6">
                  <TextInput
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    type="password"
                  />
                </div>
                {userData && userData.msg && userData.status == '200' && (
                  <p className="text-success"> {userData.msg} </p>
                )}
                <div className="col-md-12">
                  <div className="reset-btn">
                    {user_loading ? (
                      <div> Loading... </div>
                    ) : (
                      <button type="submit" className="btn btn-primary ">
                        Reset Password
                      </button>
                    )}
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
