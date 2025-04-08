import { useSelector } from "react-redux";
import PlannerEntryToggle from "./PlannerEntryToggle";
import PlannerEntryRemove from "./PlannerEntryRemove";
import PlannerEdit from "./PlannerEdit";

const PlannerDisplay = () => {
  const tasks = useSelector((state) => state.plannerReducer.tasks);

  return (
    <div>
      {Object.entries(tasks).map(([date, entries]) => (
        <div key={date}>
          <h3>{date}</h3>
          {entries.map((entry) => (
            <div key={entry.id}>
              <PlannerEntryToggle
                id={entry.id}
                date={date}
                completed={entry.completed}
              />
              <span
                style={{
                  textDecoration: entry.completed ? "line-through" : "none",
                }}
              >
                {entry.name}
              </span>
              <PlannerEdit id={entry.id} date={date} currentName={entry.name} />
              <PlannerEntryRemove id={entry.id} date={date} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlannerDisplay;
