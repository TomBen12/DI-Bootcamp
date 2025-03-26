import SubHello from "./SubHello";

const Hello = (props) => {
  console.log(props);

  const arr = ['a','b',"c"];

  return (
    <>
      <h2>{props.title}</h2>
      <SubHello sub={props.subTitle} abc={arr}/>
    </>
  );
};
export default Hello;
