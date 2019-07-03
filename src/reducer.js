import { combineReducers } from 'redux';
import usersReducer from 'features/Users/users';

export default combineReducers({ users: usersReducer });
