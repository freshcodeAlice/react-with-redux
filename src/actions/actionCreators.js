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

/////////

export const createUserRequestAction = values => {
  return {
    type: ACTION_TYPES.CREATE_USER_REQUEST,
    values
  };
};

export const createUserSuccessAction = values => {
  return {
    type: ACTION_TYPES.CREATE_USER_SUCCESS,
    values
  };
};

export const createUserErrorAction = error => {
  return {
    type: ACTION_TYPES.CREATE_USER_ERROR,
    error
  };
};

////////

// http://localhost:3000/users?limit=5&offset=10

export const getUsersRequestAction = ({ limit, offset }) => {
  return {
    type: ACTION_TYPES.GET_USERS_REQUEST,
    payload: {
      limit,
      offset
    }
  };
};

export const getUsersSuccessAction = users => {
  return {
    type: ACTION_TYPES.GET_USERS_SUCCESS,
    payload: { users }
  };
};

export const getUsersErrorAction = error => {
  return {
    type: ACTION_TYPES.GET_USERS_ERROR,
    payload: { error }
  };
};
