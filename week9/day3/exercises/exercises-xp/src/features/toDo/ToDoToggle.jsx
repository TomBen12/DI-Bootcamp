import { useDispatch } from "react-redux";
import { toggleTask } from "./toDoSlice";

const ToDoToggle = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <input
        onChange={() => {
          dispatch(toggleTask(props.taskId));
        }}
        type="checkbox"
      />
    </>
  );
};

export default ToDoToggle;
