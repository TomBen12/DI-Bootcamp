import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const element = <h2>hello {1 + 1}</h2>;

createRoot(document.getElementById("root")).render(<App/>);
