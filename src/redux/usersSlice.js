import {createSlice} from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => action.payload,
  },
});

// actions
export const {setUsers} = usersSlice.actions;

// selectors
export const selectUsers = state => state.users;

// reducer
export default usersSlice.reducer;
