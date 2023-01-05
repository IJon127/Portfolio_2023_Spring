import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import Tags from "../../ui/tags/Tags.jsx";
import ProjectsItem from "./ProjectsItem.jsx";

function Projects() {
  const [activeTag, setActiveTag] = useState("Show All");
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [tags, setTags] = useState([]);

  const fetchProjects = async () => {
    const res = await fetch("api/projects");
    const dataIn = await res.json();
    setAllProjects(dataIn.data.projects.data);
    setFilteredProjects(dataIn.data.projects.data);
    setTags(dataIn.data.projects.tags);
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
