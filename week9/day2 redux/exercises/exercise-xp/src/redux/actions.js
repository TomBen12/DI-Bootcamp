import ACTIONS_TYPES from "./actionTypes";

export const addTask = (taskName) => {
  return {
    type: ACTIONS_TYPES.ADD_TASK,
    payload: { taskName },
  };
};

export const toggleTask = (id) => {
  return {
    type: ACTIONS_TYPES.TOOGGLE_TASK,
    payload: { id },
  };
};

export const removeTask = (id) => {
  return {
    type: ACTIONS_TYPES.REMOVE_TASK,
    payload: { id },
  };
};
