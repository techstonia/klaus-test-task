import {createSlice} from '@reduxjs/toolkit';

export const sortingConfigInitialState = {
  column: "name",
  direction: "asc",
};

const sortingConfigSlice = createSlice({
  name: "sortingConfig",
  initialState: sortingConfigInitialState,
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
