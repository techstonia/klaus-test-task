import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import sortingConfigReducers from './sortingConfigSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    sortingConfig: sortingConfigReducers,
  },
});
