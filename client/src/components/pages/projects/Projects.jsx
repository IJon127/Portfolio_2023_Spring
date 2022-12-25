import "./Projects.css";
import Tags from "../../ui/tags/Tags";
import ProjectsItem from "./ProjectsItem";
import { useState, useEffect } from "react";
//import axios from "axios";

const tags = [
  "Show All",
  "Installation",
  "Projection",
  "Game Design",
  "Product Design",
  "Architecture",
];

function Projects() {
  const [activeTag, setActiveTag] = useState("Show All");
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await fetch("api/projects");
    const dataIn = await res.json();
    setAllProjects(dataIn.data.projects);
    setFilteredProjects(dataIn.data.projects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      <Tags
        tags={tags}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        setFilteredItems={setFilteredProjects}
        allItems={allProjects}
      />
      <div className="projects__container">
        {filteredProjects.map((project) => (
          <ProjectsItem key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
