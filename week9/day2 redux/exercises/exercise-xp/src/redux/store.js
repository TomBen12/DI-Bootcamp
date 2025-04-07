import { configureStore } from "@reduxjs/toolkit";
import { toDoReducer } from "./reducers";

const store = configureStore({
  reducer: { toDoReducer },
});

export default store;
