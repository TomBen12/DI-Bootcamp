import CounterDisplay from "./CounterDisplay";

import { CounterContext } from "./CounterHolder";
import { useContext } from "react";
const Counter = () => {
  const a = useContext(CounterContext);
  return (
    <>
      <h2>{a.title}</h2>
      <CounterDisplay />
    </>
  );
};
export default Counter;
