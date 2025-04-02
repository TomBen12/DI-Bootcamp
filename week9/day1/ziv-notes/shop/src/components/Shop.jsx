import { useState, useEffect } from "react";
import { Link } from "react-router";
import "./shop.css";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const Shop = () => {
  const [products, setProducts] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    all();
  }, []);

  //
  const all = async () => {
    try {
      const res = await fetch(`${BASE_URL}/products`);
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.product_name.value;
    const price = e.target.product_price.value;

    try {
      const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, price }),
      });
      const data = await res.json();
      console.log(data);
      all()
    } catch (error) {
      console.log(error);
    }

    console.log(name, price);
  };
  //
  return (
    <>
      <h2>My Shop</h2>
      <div>
        <h2>Add Product:</h2>
        <form onSubmit={handleSubmit}>
          <input name='product_name' placeholder='name' />
          <input name='product_price' placeholder='price' />
          <input type='submit' />
        </form>
      </div>
      {products &&
        products.map((item) => {
          return (
            <div key={item.id} className='box'>
              <h2>{item.name}</h2>
              <h4>{item.price}</h4>
              <Link to={`/product/${item.id}`}>Buy Now</Link>
            </div>
          );
        })}
    </>
  );
};
export default Shop;
