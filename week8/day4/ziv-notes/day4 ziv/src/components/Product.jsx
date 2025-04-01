import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // setTimeout(() => {
    //   navigate("/");
    // }, 5 * 1000);
  }, []);

  return (
    <>
      <h2>Product Name: {id}</h2>
      <Link to='/shop'>Continue Shopping</Link>
      <button onClick={() => navigate("/dash")}>Go Dashboard</button>
    </>
  );
};
export default Product;
