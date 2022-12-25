import "./ProjectsItem.css";
import PictureBox from "../../ui/PictureBox";

function ProjectsItem({ project }) {
  const picUri = `images/projects/${project.name}/${project.thumbnail}`;

  return (
    <a className="projects-item__container" href="ijon.art">
      <PictureBox
        className=""
        aspectRatio=""
        img={picUri}
        alt={project.title}
      />
      <h4 className="projects-item__title">{project.title}</h4>
    </a>
  );
}

export default ProjectsItem;
