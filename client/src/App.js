import React, { useState } from "react";

import Header from "./components/header/Header";
import Wrapper from "./components/UI/Wrapper";
import Tags from "./components/tags/Tags";
import ProjectList from "./components/projects/ProjectList";
import ExerciseList from "./components/exercises/ExerciseList";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        {/* <Tags />
        <ProjectList /> */}
        <ExerciseList category="coding" />
        <ExerciseList category="3D" />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
