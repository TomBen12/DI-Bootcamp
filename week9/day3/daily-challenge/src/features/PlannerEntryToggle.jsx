import { useDispatch } from "react-redux";
import { toggleEntry } from "./plannerSlice";

const PlannerEntryToggle = ({ id, date, completed }) => {
  const dispatch = useDispatch();

  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={() => dispatch(toggleEntry({ id, date }))}
    />
  );
};

export default PlannerEntryToggle;
