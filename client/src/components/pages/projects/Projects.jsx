import "./Projects.css";
import Tags from "../../ui/tags/Tags";
import ProjectsItem from "./ProjectsItem";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const tags = [
    "Show All",
    "Installation",
    "Projection",
    "Game Design",
    "Product Design",
    "Architecture",
  ];
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
    <div className="projects">
      <Tags
        tags={tags}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        setFilteredItems={setFilteredProjects}
        allItems={allProjects}
      />
      <motion.div layout className="projects__container">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectsItem key={project.name} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Projects;
