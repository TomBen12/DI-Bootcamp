import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: "",
};

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  const response = await axios.get(POST_URL);
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addReacton: (state, action) => {
      const { id, name } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.reactions[name]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        const reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        state.posts = action.payload.map((post) => {
          return {
            ...post,
            reactions,
          };
        });
      });
  },
});

export const { addReacton } = postsSlice.actions;

export default postsSlice.reducer;
