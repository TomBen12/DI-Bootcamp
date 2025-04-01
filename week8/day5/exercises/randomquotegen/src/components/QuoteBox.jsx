import { useState, useEffect } from "react";
import quotes from "../data/quotes";

const QuoteBox = () => {
  const maxIndex = quotes.length;

  const getRandomIndex = (current) => {
    let index;
    do {
      index = Math.floor(Math.random() * maxIndex);
    } while (index === current);
    return index;
  };

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * maxIndex)
  );
  const [bgColor, setBgColor] = useState(generateRandomColor());

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  const changeQuote = () => {
    const newIndex = getRandomIndex(currentIndex);
    setCurrentIndex(newIndex);
    setBgColor(generateRandomColor());
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "10px",
        color: "#333",
        minHeight: "6rem",
      }}
    >
      <h2>
        <em>"{quotes[currentIndex].quote}"</em>
      </h2>
      <p>{quotes[currentIndex].author}</p>
      <button
        onClick={changeQuote}
        style={{
          backgroundColor: bgColor,
          color: "#fff",
          border: "none",
          marginTop: "1rem",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        new Quote
      </button>
    </div>
  );
};

export default QuoteBox;
