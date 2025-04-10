import { memo } from "react";

const ToDo = ({ todos }) => {
  console.log("render todo COmP");
  return (
    <>
      <h2>Todo</h2>
      {todos &&
        todos.map((item, index) => {
          <div key={index}>{item}</div>;
        })}
    </>
  );
};

export default memo(ToDo);
