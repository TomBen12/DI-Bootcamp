import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: {
    "2026-02-02": [
      { id: uuidv4(), name: "do stuff", completed: false },
      { id: uuidv4(), name: "do more stuff", completed: false },
    ],
    "2026-03-02": [{ id: uuidv4(), name: "bla bla", completed: false }],
  },
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    addEntry: (state, action) => {
      const { date, name } = action.payload;
      const newEntry = {
        id: uuidv4(),
        name,
        completed: false,
      };

      if (!state.tasks[date]) {
        state.tasks[date] = [];
      }

      state.tasks[date].push(newEntry);
    },
    toggleEntry: (state, action) => {
      const { date, id } = action.payload;
      const entry = state.tasks[date]?.find((e) => e.id === id);
      if (entry) {
        entry.completed = !entry.completed;
      }
    },
    removeEntry: (state, action) => {
      const { date, id } = action.payload;
      state.tasks[date] = state.tasks[date].filter((entry) => entry.id !== id);
      if (state.tasks[date].length === 0) {
        delete state.tasks[date];
      }
    },
    changeDate: (state, action) => {
      const { oldDate, newDate, id } = action.payload;

      const entryIndex = state.tasks[oldDate]?.findIndex((e) => e.id === id);
      if (entryIndex === -1 || entryIndex === undefined) return;

      const [movedEntry] = state.tasks[oldDate].splice(entryIndex, 1);

      if (state.tasks[oldDate].length === 0) {
        delete state.tasks[oldDate];
      }

      if (!state.tasks[newDate]) {
        state.tasks[newDate] = [];
      }

      state.tasks[newDate].push(movedEntry);
    },
    changeName: (state, action) => {
      const { date, id, newName } = action.payload;
      const entry = state.tasks[date]?.find((e) => e.id === id);
      if (entry) {
        entry.name = newName;
      }
    },
  },
});

export const { addEntry, toggleEntry, removeEntry, changeDate, changeName } =
  plannerSlice.actions;

export default plannerSlice.reducer;
