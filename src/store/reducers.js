import { combineReducers } from "@reduxjs/toolkit";
import main from "./main/main";

export const rootReducer = combineReducers({
  main: main,
})
