export const increment = () => {
  return {
    type: 'INCREMENT_COUNT'
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT_COUNT'
  };
};

export const changeStep = value => {
  return {
    type: 'SET_STEP',
    value
  };
};
