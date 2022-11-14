import React, { useEffect, useState } from "react";

import Header from "./components/layouts/header/Header";
import Main from "./components/layouts/main/Main";
import Footer from "./components/layouts/footer/Footer";
import Home from "./components/pages/home/Home";
import Projects from "./components/pages/projects/Projects";
import Exercises from "./components/pages/exercises/Exercises";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Home />
        <Projects />
        <Exercises />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
