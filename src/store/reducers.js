import { combineReducers } from '@reduxjs/toolkit';
import { entriesReducer } from './entries/reducers/entries.reducer';

export const rootReducer = combineReducers({
  entries: entriesReducer,
});
