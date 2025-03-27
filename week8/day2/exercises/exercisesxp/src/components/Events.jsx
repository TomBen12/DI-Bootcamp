import { useState } from "react";
export const Events = () => {
  const ClickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter")
      alert(`Enter Key was Pressed!! your input is ${e.target.value} `);
    return;
  };

  const [isToggleOn, setIsToggleOn] = useState(true);

  const buttonText = isToggleOn === true ? "On" : "Off";

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <>
      <div>
        <button onClick={ClickMe}>Click meh!</button>
      </div>
      <div>
        <input type="text" onKeyDown={handleKeyDown} />
      </div>
      <div>
        <button onClick={toggle}>{buttonText}</button>
      </div>
    </>
  );
};
