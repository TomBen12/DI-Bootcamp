import { useDispatch } from "react-redux";
import { removeTask } from "./toDoSlice";
const ToDoDelete = (props) => {
  const dispatch = useDispatch();
  const { taskId } = props;

  return (
    <>
      <button
        onClick={() => {
          dispatch(removeTask(taskId));
        }}
      >
        Remove
      </button>
    </>
  );
};

export default ToDoDelete;
