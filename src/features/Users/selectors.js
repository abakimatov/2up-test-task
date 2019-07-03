import { createSelector } from 'reselect';

const usersSelector = (state) => state.users.list;
const loadingSelector = (state) => state.users.loading;
const errorSelector = (state) => state.users.error;

export const getUsersList = createSelector(
  usersSelector,
  (users) => users
);
export const getLoadingStatus = createSelector(
  loadingSelector,
  (loading) => loading
);
export const getError = createSelector(
  errorSelector,
  (error) => error
);
