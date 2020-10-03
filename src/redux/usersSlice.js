import _ from 'lodash';
import {createSlice} from '@reduxjs/toolkit';
import {changeSortingConfig} from './sortingConfigSlice';

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
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type === changeSortingConfig().type,
        (state, action) => {
          return _.orderBy(state, action.payload.column, action.payload.direction);
        },
      );
  },
});

// actions
export const {
  setUsers,
  markUserAsSelected,
  markUserAsDeselected,
} = usersSlice.actions;

// selectors
export const selectUsersIds = state => state.users.map(({id}) => id);
export const selectUser = (state, userId) => state.users.find(({id}) => id === userId);
export const getMarkedUsersCount = (state) => state.users.reduce(
  (accumulator, {selected}) => accumulator + (selected ? 1 : 0),
  0,
);

// reducer
export default usersSlice.reducer;
