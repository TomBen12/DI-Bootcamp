import { CounterContext } from "./CounterHolder";
import { MyContext } from "./CounterHolder";
import { useContext } from "react";
const CounterButton = () => {
  const { setCount } = useContext(CounterContext);
  const { buttonTitle } = useContext(MyContext);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>
        {" "}
        {buttonTitle}{" "}
      </button>
    </>
  );
};
export default CounterButton;
