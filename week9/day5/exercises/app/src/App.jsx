import { useState } from "react";
import ToDo from "./ToDo";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    setTodos((todos) => [...todos, "new Task"]);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <div>
        <button
          onClick={() => {
            addTask();
          }}
        >
          Add Task
        </button>
      </div>
      <ToDo />
    </>
  );
}

export default App;
