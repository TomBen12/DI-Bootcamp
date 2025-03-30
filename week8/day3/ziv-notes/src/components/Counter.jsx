import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  if (count > 5) {
    throw new Error("opps......!!!!!");
  }
  return (
    <>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
};
export default Counter;
