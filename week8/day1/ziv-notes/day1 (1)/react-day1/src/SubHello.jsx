import Abc from "./Abc";
const SubHello = (props) => {
  console.log(props);
  const { abc, sub } = props;
  return (
    <>
      <h4>{sub}</h4>
      {abc.map((item) => {
        return <Abc b={item}/>
      })}
    </>
  );
};
export default SubHello;
