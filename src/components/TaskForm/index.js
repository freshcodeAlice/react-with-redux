import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { createTaskAction } from '../../actions/actionCreators';

const TaskForm = props => {
  const onSubmit = (values, formikBag) => {
    props.createTask(values);
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
// const mapDispatchToProps = {
//   createTaskAction
// };

const mapDispatchToProps = dispatch => {
  return {
    createTask: values => dispatch(createTaskAction(values))
  };
};

export default connect(null, mapDispatchToProps)(TaskForm);
