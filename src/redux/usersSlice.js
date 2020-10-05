import _ from 'lodash';
import {createSlice} from '@reduxjs/toolkit';
import {selectSortingConfig} from './sortingConfigSlice';
import userFilter from './userFilter';
import {selectSearchString} from './searchStringSlice';

const markUser = (state, action, selected) => {
  const {payload: userId} = action;
  const user = state.find(({id}) => id === userId);
  user.selected = selected;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => action.payload,
    markUserAsSelected: (state, action) => markUser(state, action, true),
    markUserAsDeselected: (state, action) => markUser(state, action, false),
    toggleAllUsers: (state, action) => {
      state.forEach((user) => user.selected = action.payload);
    },
    deleteUser: (state, action) => _.reject(state, {id: action.payload}),
    deleteSelectedUsers: (state) => _.reject(state, {selected: true}),
  },
});

// actions
export const {
  setUsers,
  markUserAsSelected,
  markUserAsDeselected,
  toggleAllUsers,
  deleteUser,
  deleteSelectedUsers,
} = usersSlice.actions;

// selectors
const selectUsers = (state) => {
  const searchString = selectSearchString(state);
  const {column, direction} = selectSortingConfig(state) || {};

  return _(state.users)
    .filter((user) => userFilter(user, searchString))
    .orderBy(column, direction)
    .value();
};
export const selectUsersIds = state => selectUsers(state).map(({id}) => id);
export const selectUser = (state, userId) => state.users.find(({id}) => id === userId);
export const getMarkedUsersCount = (state) => state.users.reduce(
  (accumulator, {selected}) => accumulator + (selected ? 1 : 0),
  0,
);
export const areAllUsersMarked = (state) => {
  return state.users.length > 0 && getMarkedUsersCount(state) === state.users.length;
};

// reducer
export default usersSlice.reducer;
