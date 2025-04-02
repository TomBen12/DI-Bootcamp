import App from "../App";

import { CounterContext } from "./CounterHolder";
import { useContext } from "react";

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);

  return (
    <>
      <h2>The count is : {count}</h2>
    </>
  );
};
export default CounterDisplay;

/*
App
|_CounterHolder
            |_
            Context
                Counter
                    |_ 
                        CounterDisplay
            |_
                CounterButton
            /Context
*/
