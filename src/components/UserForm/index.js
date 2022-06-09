import React from 'react';
import { Formik, Form, Field } from 'formik';
import { createUserRequestAction } from '../../actions/actionCreators';
import { connect } from 'react-redux';

const UserForm = props => {
  const onSubmitForm = (values, formikBag) => {
    props.createUserRequestAction(values);
  };

  return (
    <>
      <h1>User Registration</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          birthday: '',
          password: ''
        }}
        onSubmit={onSubmitForm}
      >
        <Form>
          <Field name='firstName' placeholder='firstName' />
          <Field name='lastName' placeholder='lastName' />
          <Field name='email' placeholder='email' />
          <Field name='birthday' placeholder='birthday' />
          <Field name='password' placeholder='password' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default connect(null, { createUserRequestAction })(UserForm);
