import { useRef, useState } from "react";

const CharCounter = () => {
  const [length, setLength] = useState(0);
  const inputRef = useRef(null);

  const handleChange = () => {
    const inputValLength = inputRef.current.value.length;
    setLength(inputValLength);
  };

  return (
    <>
      <input type="text" ref={inputRef} onChange={handleChange} />
      <p>{length}</p>
    </>
  );
};

export default CharCounter;
