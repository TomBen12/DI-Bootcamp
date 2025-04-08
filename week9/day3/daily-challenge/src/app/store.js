import { configureStore, combineReducers } from "@reduxjs/toolkit";
import plannerReducer from "../features/plannerSlice";

const appReducer = combineReducers({ plannerReducer });

const store = configureStore({
  reducer: appReducer,
});

export default store;
