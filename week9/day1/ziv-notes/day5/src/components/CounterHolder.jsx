import { useContext } from "react";
import { ThemeContext } from "./ThemeContainer";

const ContainerDisplay = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="content">
      <h1>{theme === "light" ? "Light Mode 🌞" : "Dark Mode 🌙"}</h1>
      <button className="theme-button" onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

export default ContainerDisplay;
