import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./toDoSlice";

const ToDoInput = () => {
  const dispatch = useDispatch();
  const taskNameRef = useRef("");
  const handleClick = () => {
    const name = taskNameRef.current.value;
    if (name.trim() === "") return;
    dispatch(addTask({ name }));
  };

  return (
    <>
      <input type="text" ref={taskNameRef} placeholder="Enter new Task" />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Add
      </button>
    </>
  );
};

export default ToDoInput;
