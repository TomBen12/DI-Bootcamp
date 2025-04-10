import { useDispatch } from "react-redux";
import { ageUpAsync, ageDownAsync } from "./ageSlice";
const AgeControls = () => {
  const dispatch = useDispatch();

  return (
    <>
      <form>
        <h3>Age or Get Younger: </h3>
        <button
          onClick={() => {
            dispatch(ageUpAsync());
          }}
        >
          🧓🏻
        </button>
        <button
          onClick={() => {
            dispatch(ageDownAsync());
          }}
        >
          👶🏼
        </button>
      </form>
    </>
  );
};

export default AgeControls;
