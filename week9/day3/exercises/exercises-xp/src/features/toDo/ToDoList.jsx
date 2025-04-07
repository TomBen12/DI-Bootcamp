import ToDoDelete from "./ToDoDelete";
import ToDoToggle from "./ToDoToggle";
import { useSelector } from "react-redux";
const ToDoList = () => {
  const toDoList = useSelector((state) => state.toDoReducer);
  return (
    <>
      <h2>ToDo List</h2>
      <div>
        {toDoList.map((task) => {
          return (
            <div key={task.id}>
              <label
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.name}
                <ToDoToggle taskId={task.id} />
              </label>
              <ToDoDelete taskId={task.id} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToDoList;
