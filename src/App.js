import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Lodging from "./pages/Lodging";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer"

async function getData() {
  const residences = await fetch("/data.json", {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  const data = await residences.json();
  return data;
}

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((residences) => {
      setData(residences);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:id" element={<Lodging data={data} />} />
        <Route path="*" element={<Error404 />} />
        </Routes>
      <Footer /> 
    </BrowserRouter>
  );
};

export default App;
