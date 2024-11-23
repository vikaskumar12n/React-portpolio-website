import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
