import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask, removeTask } from "../redux/actions";
import { useRef } from "react";

const TaskManager = () => {
  const toDoTasks = useSelector((state) => state.toDoReducer.toDoTasks);
  const dispatch = useDispatch();
  const taskInput = useRef("");

  const handleAddTask = () => {
    const value = taskInput.current.value.trim();
    if (value !== "") {
      dispatch(addTask(value));
      taskInput.current.value = "";
    }
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <>
      <h1>Task Manager</h1>
      <input type="text" ref={taskInput} placeholder="New task..." />
      <button onClick={handleAddTask}>Add Task +</button>

      <h3>My Tasks:</h3>
      <ul>
        {toDoTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.taskName}
            </span>
            <button onClick={() => handleRemoveTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskManager;
