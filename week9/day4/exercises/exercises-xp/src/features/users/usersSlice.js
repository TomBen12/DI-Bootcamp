import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  status: "",
};

export const getUsers = createAsyncThunk("users/getinfo", async () => {
  //testing loading
  await new Promise((res) => setTimeout(res, 2000));
  //
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = "error";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "";
        state.users = action.payload;
      });
  },
});

export default usersSlice.reducer;
