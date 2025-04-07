import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
const ToDo = () => {
  return (
    <div id="todo-container">
      <h1>ToDo Manager</h1>
      <ToDoInput />
      <ToDoList />
    </div>
  );
};

export default ToDo;
