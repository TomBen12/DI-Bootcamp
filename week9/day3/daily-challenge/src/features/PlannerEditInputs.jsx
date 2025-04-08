import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeDate, changeName } from "./plannerSlice";

const PlannerEditInputs = ({ id, oldDate, currentName, onClose }) => {
  const [name, setName] = useState(currentName);
  const [newDate, setNewDate] = useState(oldDate);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (name !== currentName) {
      dispatch(changeName({ date: oldDate, id, newName: name }));
    }
    if (newDate !== oldDate) {
      dispatch(changeDate({ oldDate, newDate, id }));
    }
    onClose();
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input
        type="date"
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default PlannerEditInputs;
