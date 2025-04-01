import { useState } from "react";
import { Link } from "react-router";

const products = [
  { id: 1, name: "iPhone 15", price: 999 },
  { id: 2, name: "iPhone 14", price: 888 },
  { id: 3, name: "iPhone 16", price: 777 },
];

const Shop = () => {
  return (
    <>
      <h2>My Shop</h2>
      {products &&
        products.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <Link to={`/product/${item.id}`}>Buy Now!!!</Link>
            </div>
          );
        })}
    </>
  );
};
export default Shop;
