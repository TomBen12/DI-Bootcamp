import SubChild from "./SubChild";

const Child = (props) => {
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <SubChild/>
    </>
  );
};
export default Child;
