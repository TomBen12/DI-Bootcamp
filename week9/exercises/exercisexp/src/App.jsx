import { useState, createContext } from "react";
import ContainerDisplay from "./components/ContainerDisplay";
import "./App.css"; // We'll write styles here

export const ThemeContext = createContext();

const App = () => {
  
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <body className={`app ${theme}`}>
        <ContainerDisplay />
      </body>
    </ThemeContext.Provider>
  );
};

export default App;
