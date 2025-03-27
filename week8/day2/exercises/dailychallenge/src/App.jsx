import { useState } from "react";
import "./App.css";
import { Option } from "./components/Option";
function App() {
  const [languages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);
  return (
    <>
      {languages.map((element, index) => {
        return <Option key={index} name={element.name} votes={element.votes} />;
      })}
    </>
  );
}

export default App;
