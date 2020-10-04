import {createSlice} from '@reduxjs/toolkit';

const sortingConfigSlice = createSlice({
  name: "sortingConfig",
  initialState: {
    column: "name",
    direction: "asc",
  },
  reducers: {
    changeSortingConfig: (state, action) => {
      const columnToBePressed = action.payload;
      const toggleCurrentColumn = state.column === columnToBePressed;

      if (toggleCurrentColumn) {
        return {
          column: columnToBePressed,
          direction: state.direction === "asc" ? "desc" : "asc",
        };
      }

      return {
        column: columnToBePressed,
        direction: "asc",
      };
    },
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
