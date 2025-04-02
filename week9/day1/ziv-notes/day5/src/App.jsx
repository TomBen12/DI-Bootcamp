import "./App.css";
// import CounterHolder from "./components/CounterHolder";
import { useRef, useState } from "react";

/**
 * lift up / drill down
 */

/**
 * create context = {} - createContext
 * share the context - Provider (*v19 dont use the Provider) value={}
 * get this value - useContext hook
 */

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef("abc");
  const headerRef = useRef();
  // ref.current = '123'
  let title = "my title";

  const firstRefInput = useRef()
  const secondRefInput = useRef()

  const changeRef = () => {
    // ref.current = "123";
    // title = "hello world";
    // console.log(ref);
    // console.log(title);
    console.log(headerRef.current);
    headerRef.current.style.backgroundColor = "yellow";

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstRefInput.current.name);
    console.log(secondRefInput.current.value);
  };

  return (
    <>
      <h2>useRef</h2>
      <h2 ref={headerRef}>
        {ref.current} {title}
      </h2>
      <button onClick={() => changeRef()}>Change Ref</button>
      <button onClick={() => setCount(count + 1)}>count = {count}</button>
      {/* <h2>createContext + useContext</h2> */}
      {/* <CounterHolder /> */}
      <form onSubmit={handleSubmit}>
        <input name="blablabla" ref={firstRefInput}/>
        <input ref={secondRefInput}/>
        <input type="submit"/>
      </form>
    </>
  );
}

export default App;
