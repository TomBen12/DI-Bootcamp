import { useState } from "react";

const BuggyCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  if (counter > 5) throw new Error("OOops")
  return (
    <>
      <h3>Count: {counter}</h3>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default BuggyCounter;
