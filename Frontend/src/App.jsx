import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Services from "./Pages/Services";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
