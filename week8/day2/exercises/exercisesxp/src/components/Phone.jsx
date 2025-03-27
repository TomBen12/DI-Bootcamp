import { useState } from "react";

export const Phone = () => {
  const [brand] = useState("Samsung");
  const [name] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year] = useState(2020);

  const changeColor = () => {
    setColor("blue");
  };
  return (
    <>
      <h3>My Phone is a {brand}</h3>
      <p>
        It is a {color} {name} from the {year}
      </p>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
};
