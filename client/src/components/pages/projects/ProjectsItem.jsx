import "./ProjectsItem.css";

function ProjectsItem({ project }) {
  const picUri = `images/projects/${project.name}/${project.thumbnail}`;

  return (
    <a className="projects-item__container" href="ijon.art">
      <div className="projects-item__pic-box">
        <img
          src={picUri}
          className="projects-item__picture"
          alt={project.title}
        />
      </div>
      <h4 className="projects-item__title">{project.title}</h4>
    </a>
  );
}

export default ProjectsItem;
