import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PulseLoader from "react-spinners/PulseLoader";
import "./Projects.css";
import Tags from "../../ui/tags/Tags.jsx";
import ProjectsItem from "./ProjectsItem.jsx";

function Projects() {
  const [loading, setLoading] = useState(true);
  const [activeTag, setActiveTag] = useState("Show All");
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [tags, setTags] = useState([]);

  const fetchProjects = async () => {
    const res = await fetch("http://localhost:5000/api/projects");
    const dataIn = await res.json();
    setAllProjects(dataIn.data.projects.data);
    setFilteredProjects(dataIn.data.projects.data);
    setTags(dataIn.data.projects.tags);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      {loading && (
        <PulseLoader
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {!loading && (
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
      )}
    </div>
  );
}

export default Projects;
