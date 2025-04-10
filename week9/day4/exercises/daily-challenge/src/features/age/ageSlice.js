import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  age: 20,
  status: "",
};

export const ageUpAsync = createAsyncThunk("age/ageUpAsync", () => {
  return new Promise((res) => {
    setTimeout(() => res(1), 4 * 1000);
  });
});

export const ageDownAsync = createAsyncThunk("age/ageDownAsync", () => {
  return new Promise((res) => {
    setTimeout(() => res(1), 4 * 1000);
  });
});

const ageSlice = createSlice({
  name: "age",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        console.log(action);

        state.age += action.payload;
        state.status = "";
      })
      .addCase(ageUpAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.age -= action.payload;
        state.status = "";
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.status = "loading";
      });
  },
});

export default ageSlice.reducer;
