import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "./plannerSlice";

const PlannerInputs = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!name || !date) return;
    dispatch(addEntry({ date, name }));
    setName("");
    setDate("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default PlannerInputs;
