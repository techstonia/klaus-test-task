import {createSlice} from '@reduxjs/toolkit';

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

// reducer
export default usersSlice.reducer;
