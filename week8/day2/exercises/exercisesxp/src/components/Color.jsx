import { useEffect, useState } from "react";

export const Color = () => {
  const [favoriteColor, setFavoriteClolor] = useState("red");
  useEffect(() => {
    alert("useEffect reached.");

    //added this to see the change better
    setTimeout(() => {
      setFavoriteClolor("Yellow");
    }, 2000);

    //instruction where a bit unclear i hope thiis is what they meant
  }, []);
  return (
    <>
      <h3>My Favorite Color is {favoriteColor}</h3>
      <button
        onClick={() => {
          setFavoriteClolor("blue");
        }}
      >
        Change my Favorite Color
      </button>
    </>
  );
};
