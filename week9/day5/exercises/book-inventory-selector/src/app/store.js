import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postReducer from "../features/posts/PostSlice";



const rootReducer = combineReducers({
  posts: postReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
