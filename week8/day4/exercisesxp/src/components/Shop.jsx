import { useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    throw new Error("An error has occured");
  }, []);
  return (
    <>
      <h1>Shop</h1>
    </>
  );
};

export default Shop;
