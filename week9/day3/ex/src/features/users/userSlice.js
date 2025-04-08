import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: "hjsdhfj", name: "Jhon", email: "jjj@gmail.com" },
    { id: "1345bdrt6", name: "Anne", email: "aaa@gmail.com" },
    { id: "iismdjfhm", name: "Dan", email: "ddd@gmail.com" },
  ],
};

const userSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
