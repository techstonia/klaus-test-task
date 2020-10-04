import {createSlice} from '@reduxjs/toolkit';

const searchStringSlice = createSlice({
  name: "searchString",
  initialState: "",
  reducers: {
    searchStringChanged: (state, action) => action.payload,
  },
});

// actions
export const {
  searchStringChanged,
} = searchStringSlice.actions;

// selectors
export const selectSearchString = state => state.searchString;

// reducer
export default searchStringSlice.reducer;
