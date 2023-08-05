import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { TextInput } from '../../components/Form/Form';

const PersonalInfo = ({ user_loading, userData }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="personal-flex">
              <div className="title"> Name </div>
              <div className="value"> {userData && userData.name} </div>
            </div>
            <div className="personal-flex">
              <div className="title"> Email </div>
              <div className="value"> {userData && userData.email} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
