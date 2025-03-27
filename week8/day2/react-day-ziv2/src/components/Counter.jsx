import { useState, useEffect } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const [init, setInit] = useState({ count: 10 });

  useEffect(() => {
    // if(count === 0) return
    console.log("hi");
    // setCount(3) not use!!!!!!!!!
  }, [count]);

  const addOne = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((a) => a + 1);
  };

  const add1ToInit = () => {
    const newInit = { ...init };
    newInit.count++;
    setInit(newInit);
    setInit({ ...init, count: init.count + 1 });
  };

  return (
    <>
      <h2>{init.count}</h2>
      <button onClick={add1ToInit}> +1 to init</button>

      <h2>Count: {count}</h2>
      <button onClick={addOne}> + 1 </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        {" "}
        - 1{" "}
      </button>
    </>
  );
};
export default Counter;
