import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    try {
      const res = await fetch(`${BASE_URL}/products/${id}`);
      const [data] = await res.json();
      console.log(data);
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <h2>Product: {product?.name}</h2>
      <h3>Price: {product?.price}</h3>
      <Link to='/'>Continue Shoping</Link>
    </>
  );
};
export default Product;
