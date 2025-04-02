import { useState, useEffect } from "react";

const MoshiMoshi = () => {
  const [message, setMessage] = useState("");
  const fetchMoshiMoshi = async () => {
    const response = await fetch("http://localhost:3000/api/hello");
    if (!response.ok) console.log("Bad!");
    const data = await response.json();
    setMessage(data.message);
  };

  useEffect(() => {
    fetchMoshiMoshi();
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
};

export default MoshiMoshi;
