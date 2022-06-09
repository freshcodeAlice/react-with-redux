import { ACTION_TYPES } from '../actions/actionTypes';

const initState = {
  users: [],
  error: null,
  isFetching: false
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case ACTION_TYPES.CREATE_USER_SUCCESS: {
      const { values } = action;
      const { users } = state;
      return {
        ...state,
        users: [...users, values],
        isFetching: false
      };
    }
    case ACTION_TYPES.CREATE_USER_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    }
    case ACTION_TYPES.GET_USERS_REQUEST: {
      return {
        ...state,
        isFetching: true
      };
    }
    case ACTION_TYPES.GET_USERS_SUCCESS: {
      const { users } = state;
      const {
        payload: { users: newUsers }
      } = action;
      return {
        ...state,
        isFetching: false,
        users: [...users, ...newUsers]
      };
    }
    case ACTION_TYPES.GET_USERS_ERROR: {
      const {
        payload: { error }
      } = action;
      return {
        ...state,
        isFetching: false,
        error: error
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
