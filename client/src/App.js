import { Route, Routes } from "react-router-dom";

import Header from "./components/layouts/header/Header.jsx";
import Main from "./components/layouts/main/Main.jsx";
import Footer from "./components/layouts/footer/Footer.jsx";
import Home from "./components/pages/home/Home.jsx";
import Projects from "./components/pages/projects/Projects.jsx";
import Project from "./components/pages/project/Project.jsx";
import Exercises from "./components/pages/exercises/Exercises.jsx";
import Papers from "./components/pages/papers/Papers.jsx";
import About from "./components/pages/about/About.jsx";
import Contact from "./components/pages/contact/Contact.jsx";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Main className="app__main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="papers" element={<Papers />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/:projectName" element={<Project />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
