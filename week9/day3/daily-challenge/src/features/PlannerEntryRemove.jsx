import { useDispatch } from "react-redux";
import { removeEntry } from "./plannerSlice";

const PlannerEntryRemove = ({ id, date }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(removeEntry({ id, date }))}>🗑️</button>
  );
};

export default PlannerEntryRemove;
