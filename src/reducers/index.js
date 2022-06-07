import { ACTION_TYPES } from '../actions/actionTypes';

const initState = {
  count: 0,
  step: 1,
  tasks: [
    {
      id: 0,
      body: 'Test task',
      isDone: false
    }
  ]
};

let serial = 1;

// PURE FUNCTION! DO NOT MUTABLE STATE!
export const reducer = (state = initState, action) => {
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
    case ACTION_TYPES.CREATE_TASK: {
      const { tasks } = state;
      const { values } = action;
      return {
        ...state,
        tasks: [
          ...tasks,
          {
            ...values,
            id: serial++
          }
        ]
      };
    }
    case ACTION_TYPES.UPDATE_TASK: {
      const { tasks } = state;
      const { id, values } = action;
      const newTasks = [...tasks];
      const taskIndex = newTasks.findIndex(task => task.id === id);
      const task = newTasks[taskIndex];
      newTasks[taskIndex] = { ...task, ...values };
      return { ...state, tasks: newTasks };
    }
    case ACTION_TYPES.DELETE_TASK: {
      const { tasks } = state;
      const { id } = action;
      const newTasks = [...tasks].filter(t => t.id !== id);

      return { ...state, tasks: newTasks };
    }
    default: {
      return state;
    }
  }
};
