import { createSelector } from "@reduxjs/toolkit";
import { state } from "./PostSlice";

export const selectPosts = createSelector([state], (state) => {
  return state.posts;
});

export const selectStatus = createSelector([state], (state) => {
  return state.status;
});
