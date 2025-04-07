import ACTIONS_TYPES from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  toDoTasks: [],
};

// {
//   id: 123456,
//   taskName: "Learn Redux",
//   completed: false
// }

export const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.ADD_TASK: {
      const newTask = {
        id: uuidv4(),
        taskName: action.payload.taskName,
        completed: false,
      };
      return {
        ...state,
        toDoTasks: [...state.toDoTasks, newTask],
      };
    }

    case ACTIONS_TYPES.TOOGGLE_TASK: {
      const updatedTasks = state.toDoTasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
      return {
        ...state,
        toDoTasks: updatedTasks,
      };
    }

    case ACTIONS_TYPES.REMOVE_TASK: {
      const filteredTasks = state.toDoTasks.filter(
        (task) => task.id !== action.payload.id
      );
      return { ...state, toDoTasks: filteredTasks };
    }
    default:
      return state;
  }
};
