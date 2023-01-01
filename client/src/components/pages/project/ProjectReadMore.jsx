import "./ProjectReadMore.css";
import { motion } from "framer-motion";

function ProjectReadMore({ readMore }) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="project-readMore"
    >
      {readMore.title && (
        <h2 className="project-readMore__title-subtitle">{readMore.title}</h2>
      )}
      {readMore.subtitle && (
        <h3 className="project-readMore__title-subtitle">
          {readMore.subtitle}
        </h3>
      )}
      {readMore.paragraphs &&
        readMore.paragraphs.map((para) => (
          <p className="para" key={para}>
            {para}
          </p>
        ))}
      {readMore.lists && (
        <ul className="project-readMore__ul">
          {readMore.lists.map((list) => (
            <li className="para" key={list}>
              {"• " + list}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
export default ProjectReadMore;
