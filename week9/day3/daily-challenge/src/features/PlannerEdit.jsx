import { useState } from "react";
import PlannerEditInputs from "./PlannerEditInputs";

const PlannerEdit = ({ id, date, currentName }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <button onClick={() => setIsEditing((prev) => !prev)}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      {isEditing && (
        <PlannerEditInputs
          id={id}
          oldDate={date}
          currentName={currentName}
          onClose={() => setIsEditing(false)}
        />
      )}
    </>
  );
};

export default PlannerEdit;
