import { ReactNode } from "react";
const Header = (props: { title: string, subTitle: string }) => {
  return (
    <>
      <h1>Title: {props.title}</h1>
      <p>Sub Title {props.subTitle}</p>
    </>
  );
};

export default Header;
