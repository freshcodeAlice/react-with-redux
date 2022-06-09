import * as API from '../api';
import { put } from 'redux-saga/effects';
import * as ActionCreators from '../actions/actionCreators';

export function * createUserSaga (action) {
  try {
    const {
      data: {
        data: [user]
      }
    } = yield API.createUser(action.values);
    yield put(ActionCreators.createUserSuccessAction(user));
  } catch (error) {
    yield put(ActionCreators.createUserErrorAction(error));
  }
}

/*
{
    data: {
        data: 
            [{

            }]
        
    }
}

*/

export function * getUsersSaga (action) {
  try {
    const {
      data: { data: users }
    } = yield API.getUsers(action.payload);
    yield put(ActionCreators.getUsersSuccessAction(users));
  } catch (error) {
    yield put(ActionCreators.getUsersErrorAction(error));
  }
}
