import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//imported components
import NarBar from "./Components/NavBar/NavBar";

//imported pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactPage from "./Pages/Contact";
import ProjectsPage from "./Pages/Projects";

function App() {
  return (
    <div className="App">
      <NarBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
