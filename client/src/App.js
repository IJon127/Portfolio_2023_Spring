import { Route, Routes } from "react-router-dom";

import Header from "./components/layouts/header/Header";
import Main from "./components/layouts/main/Main";
import Footer from "./components/layouts/footer/Footer";
import Home from "./components/pages/home/Home";
import Projects from "./components/pages/projects/Projects";
import Project from "./components/pages/project/Project";
import Exercises from "./components/pages/exercises/Exercises";
import About from "./components/pages/about/About";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="about" element={<About />} />
          <Route path="/:projectName" element={<Project />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
