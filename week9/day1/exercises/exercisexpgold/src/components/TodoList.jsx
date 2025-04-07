import { useReducer, useRef } from "react";

const TodoList = () => {
  const initialList = [];

  const listControl = (state, action) => {
    if (action.type === "ADD") {
      return [...state, { id: Date.now(), title: action.payload.title }];
    } else if (action.type === "REMOVE") {
      return state.filter((task) => task.id !== action.payload.id);
    } else {
      return state;
    }
  };

  const [taskList, dispatch] = useReducer(listControl, initialList);
  const taskRef = useRef();

  const handleAdd = () => {
    const title = taskRef.current.value.trim();
    if (!title) return;
    dispatch({ type: "ADD", payload: { title } });
    taskRef.current.value = "";
  };

  return (
    <>
      <h3>Add Task</h3>
      <input type="text" ref={taskRef} placeholder="Enter new Task" />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            {task.title}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE", payload: { id: task.id } })
              }
            >
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList