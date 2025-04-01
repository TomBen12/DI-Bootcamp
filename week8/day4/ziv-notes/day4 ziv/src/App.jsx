import { useState, useEffect } from "react";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Header from "./components/Header";

import { Routes, Route, Link } from "react-router";
import Shop from "./components/Shop";
import Product from "./components/Product";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<h2>404 page not found</h2>} />
      </Routes>
    </>
  );
}

export default App;
