import { useRef, useState } from "react";

const CharCounter = () => {
  const [length, setLength] = useState(0);
  const inputRef = useRef(null);

  setLength((prev)=>{ prev + 1})

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
