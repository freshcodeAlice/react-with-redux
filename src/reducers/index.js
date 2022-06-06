const initState = {
  count: 0,
  step: 1
};

// PURE FUNCTION! DO NOT MUTABLE STATE!
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT': {
      return { ...state, count: state.count + state.step };
    }
    case 'DECREMENT_COUNT': {
      return { ...state, count: state.count - state.step };
    }
    case 'SET_STEP': {
      return { ...state, step: action.value };
    }
    default: {
      return state;
    }
  }
};
