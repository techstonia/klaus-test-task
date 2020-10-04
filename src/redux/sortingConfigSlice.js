import {createSlice} from '@reduxjs/toolkit';

const sortingConfigSlice = createSlice({
  name: "sortingConfig",
  initialState: {
    column: "name",
    direction: "asc",
  },
  reducers: {
    changeSortingConfig: (state, action) => action.payload,
  },
});

// actions
export const {
  changeSortingConfig,
} = sortingConfigSlice.actions;

// selectors
export const selectSortingConfig = state => state.sortingConfig;

// reducer
export default sortingConfigSlice.reducer;
