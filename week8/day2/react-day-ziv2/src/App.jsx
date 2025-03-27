import Test from "./components/Test";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import Users from "./components/Users";

/**
 *
 *  State - useState -HOOK use~
 *  const [state, setState] = useState();
 */

function App() {
  // let title = "Amazing day with React";
  const [title, setTitle] = useState("Amazing day with React");
  const [input, setInput] = useState("");

  // console.log(setTitle);

  const changeTitle = (e) => {
    // title = "New Title";

    // console.log();

    setTitle(input);
  };

  return (
    <>
      <Users />
      {/* <CounterClass /> */}
      {/* <Counter /> */}
      {/* <h2>{title}</h2>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={changeTitle}>Change Title!</button> */}
    </>
  );
}

export default App;

// function App() {
//   let show = true;
//   return <>
//     {show ? <Test status={"error"} /> : <h2>Show is {show}</h2>}
//   </>;
// }

// export default App;

// function App() {

//   const handleClick = (e) => {
//     console.log(e.target);
//     alert("Hi");
//   };

//   const handleInput = (e) => {
//     console.log(e.target.value);
//   };

//   const getInputValue = (val, a) => {
//     console.log(val, a);
//   };

//   return (
//     <>
//       <button onClick={(e) => handleClick(e)}>Click Me!</button>
//       <input onChange={handleInput} />
//       <input onChange={(e) => getInputValue(e.target.value,'tom')} />
//     </>
//   );
// }
