import * as API from '../api';
import { put } from 'redux-saga/effects';
import {
  createUserSuccessAction,
  createUserErrorAction
} from '../actions/actionCreators';

export function * createUserSaga (action) {
  try {
    const {
      data: {
        data: [user]
      }
    } = yield API.createUser(action.values);
    yield put(createUserSuccessAction(user));
  } catch (error) {
    yield put(createUserErrorAction(error));
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
