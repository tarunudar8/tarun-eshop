import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Login = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ EmailAddress: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.EmailAddress) {
          errors.EmailAddress = 'Required';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="EmailAddress">EmailAddress</label>
          <Field type="text" name="EmailAddress" />
          <ErrorMessage name="EmailAddress" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default Login;
