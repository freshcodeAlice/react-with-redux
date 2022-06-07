import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createTaskAction } from '../../actions/actionCreators';

const TaskForm = props => {
  const onSubmit = (values, formikBag) => {
    props.createTaskAction(values);
  };
  return (
    <Formik
      initialValues={{
        isDone: false,
        body: ''
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='body' />
        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
      </Form>
    </Formik>
  );
};
const mapDispatchToProps = {
  createTaskAction
};

export default connect(null, mapDispatchToProps)(TaskForm);
