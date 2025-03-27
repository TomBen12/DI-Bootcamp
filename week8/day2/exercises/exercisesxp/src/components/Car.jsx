import { useState } from "react";
import { Garage } from "./Garage";

export const Car = ({ carInfo }) => {
  const [carColor] = useState("red");
  return (
    <>
      <h2>
        This car is a {carColor} {carInfo.model}
      </h2>
      <Garage size={"small"} />
    </>
  );
};
