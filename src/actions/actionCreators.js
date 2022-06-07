import { ACTION_TYPES } from './actionTypes';

export const increment = () => {
  return {
    type: ACTION_TYPES.INCREMENT_COUNT
  };
};

export const decrement = () => {
  return {
    type: ACTION_TYPES.DECREMENT_COUNT
  };
};

export const changeStep = value => {
  return {
    type: ACTION_TYPES.SET_STEP,
    value
  };
};

/////////

export const createTaskAction = values => {
  return {
    type: ACTION_TYPES.CREATE_TASK,
    values
  };
};

export const updateTaskAction = ({ id, values }) => {
  return {
    type: ACTION_TYPES.UPDATE_TASK,
    id,
    values
  };
};

export const deleteTaskAction = id => {
  return {
    type: ACTION_TYPES.DELETE_TASK,
    id
  };
};
