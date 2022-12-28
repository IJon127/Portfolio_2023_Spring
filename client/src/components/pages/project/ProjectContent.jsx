import "./ProjectContent.css";
import ProjectInfo from "./ProjectInfo";

function ProjectContent({ project }) {
  return (
    <div className="project-content">
      <ProjectInfo
        title={project.title}
        subtitle={project.subtitle}
        team={project.team}
        types={project.types}
        time={project.time}
        location={project.location}
        venue={project.venue}
      />

      <div className="project-content__description-container">
        {project.description.map((para) => (
          <p className="project-content__description">{para}</p>
        ))}
      </div>
      {project.readMore && (
        <button className="project-content__readMore-btn">read more →</button>
      )}
    </div>
  );
}
export default ProjectContent;
