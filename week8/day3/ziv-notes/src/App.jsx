import "./App.css";
import Parent from "./components/Parent";
import Child from "./components/Child";
import Voiting from "./components/Voiting";
import { useState } from "react";
import Counter from "./components/Counter";
import ErrorBoudary from "./ErrorBoundary";
import ReactForm from "./components/ReactForm";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ReactForm />
      {/* <ErrorBoudary message={"counter 1"}>
        <Counter />
      </ErrorBoudary>
      <ErrorBoudary message={"counter 2"}>
        <Counter />
      </ErrorBoudary>
      <ErrorBoudary message={"counter 3"}>
        <Counter />
      </ErrorBoudary> */}

      {/* <h2>{count}</h2>
      <Parent admin={false}>
        <Child />
      </Parent>
      <Voiting /> */}
    </>
  );
}

export default App;
