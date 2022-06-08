import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import taskReducer from './taskReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  task: taskReducer,
  counter: counterReducer,
  user: userReducer
});

export default rootReducer;

/*

const prevState = {
step: 0,
count: 0,
tasks: []
}

const nextState = {
  counter: {
    step: 0,
    count: 0
  },
  task: {
    tasks:[]
  },
  user: {
    users: [],
    isFetching: bool,
    error: {}
  }
}


*/
