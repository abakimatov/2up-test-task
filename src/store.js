import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from 'reducer';
import { Saga } from 'features/Users/users';

const sagasMiddleware = createSagaMiddleware();

const enhancers = [applyMiddleware(sagasMiddleware)];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

const initialState = {};
export default createStore(reducer, initialState, compose(...enhancers));

sagasMiddleware.run(Saga);
