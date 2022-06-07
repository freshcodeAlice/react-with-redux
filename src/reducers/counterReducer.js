import { ACTION_TYPES } from '../actions/actionTypes';

const initState = {
  count: 0,
  step: 1
};

export const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_COUNT: {
      return { ...state, count: state.count + state.step };
    }
    case ACTION_TYPES.DECREMENT_COUNT: {
      return { ...state, count: state.count - state.step };
    }
    case ACTION_TYPES.SET_STEP: {
      return { ...state, step: action.value };
    }

    default: {
      return state;
    }
  }
};

export default counterReducer;
