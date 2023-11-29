import { Formik, Field, Form, ErrorMessage } from 'formik';

const Signup = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
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
          <label htmlFor="firstname">First Name *</label>
          <Field type="text" name="firstname" />
          <ErrorMessage name="firstname" component="div" />
        </div>

        <div>
          <label htmlFor="lastname">Last Name *</label>
          <Field type="text" name="lastname" />
          <ErrorMessage name="lastname" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email Address *</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password *</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <div>
          <label htmlFor="confirmpassword">Confirm Password *</label>
          <Field type="password" name="confirmpassword" />
          <ErrorMessage name="confirmpassword" component="div" />
        </div>

        <div>
          <label htmlFor="contactNumber">Contact Number *</label>
          <Field type="text" name="contactNumber" />
          <ErrorMessage name="contactNumber" component="div" />
        </div>

        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};

export default Signup;
