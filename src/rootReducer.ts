import {combineReducers} from '@reduxjs/toolkit';
import users from './slices/users';

const rootReducer = combineReducers({
  users,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
