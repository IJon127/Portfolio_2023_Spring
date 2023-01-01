import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectContent.css";
import ProjectInfo from "./ProjectInfo";
import ProjectReadMore from "./ProjectReadMore";

function ProjectContent({ project }) {
  const [readMoreOpen, setReadMoreOpen] = useState(false);
  const [readMoreBtn, setReadMoreBtn] = useState("read more →");

  const readMoreHandler = () => {
    setReadMoreOpen(!readMoreOpen);
    if (readMoreBtn === "read more →") {
      setReadMoreBtn("close X");
    } else {
      setReadMoreBtn("read more →");
    }
  };

  return (
    <div className="project-content">
      <ProjectInfo
        title={project.title}
        subtitle={project.subtitle}
        team={project.team}
        company={project.company}
        types={project.types}
        time={project.time}
        location={project.location}
        venue={project.venue}
      />

      <div className="project-content__description">
        {project.description.map((para) => (
          <p className="para" key={para}>
            {para}
          </p>
        ))}
      </div>
      {project.readMore && (
        <div className="readMore-btn-container">
          <button onClick={readMoreHandler} className="readMore-btn">
            {readMoreBtn}
          </button>
        </div>
      )}
      <motion.div layout className="project-content__readMore">
        <AnimatePresence>
          {project.readMore &&
            readMoreOpen &&
            project.readMore.map((readMore, index) => (
              <ProjectReadMore key={index} readMore={readMore} />
            ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
export default ProjectContent;
