import { handleActions } from 'redux-actions';
import { put, call, takeLatest } from 'redux-saga/effects';

import { get } from 'api';

const FETCH_USERS = 'redux-test/users/FETCH_USERS';
const LOAD = 'redux-test/users/LOAD';
const SUCCESS = 'redux-test/users/SUCCESS';
const FAIL = 'redux-test/users/FAIL';

export const getUsers = () => ({ type: FETCH_USERS });

export function* fetchUsers() {
  yield put({ type: LOAD, payload: true });

  try {
    const users = yield call(get, 'users');
    yield put({ type: SUCCESS, payload: users });
  } catch (e) {
    yield put({ type: FAIL, payload: e.message });
  }

  yield put({ type: LOAD, payload: false });
}

export function* Saga() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}

const initialState = {
  loading: true,
  users: [],
  error: null
};

const reducer = handleActions(
  {
    [LOAD]: (state, { payload }) => ({ ...state, loading: payload }),
    [SUCCESS]: (state, { payload }) => ({ ...state, list: payload }),
    [FAIL]: (state, { payload }) => ({ ...state, error: payload })
  },
  initialState
);

export default reducer;
