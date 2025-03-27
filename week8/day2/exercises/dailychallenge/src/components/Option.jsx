import { useState } from "react";
import "./Option.css";

export const Option = ({ name, votes }) => {
  const [numOfVotes, setnumOfVotes] = useState(votes);
  return (
    <>
      <div className="option">
        <span>{name}</span>
        <span>{numOfVotes}</span>
        <span
          onClick={() => {
            setnumOfVotes(numOfVotes + 1);
          }}
        >
          Click Here
        </span>
      </div>
    </>
  );
};
