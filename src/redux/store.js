import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import sortingConfigReducers from './sortingConfigSlice';
import searchStringReducers from './searchStringSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    sortingConfig: sortingConfigReducers,
    searchString: searchStringReducers,
  },
});
