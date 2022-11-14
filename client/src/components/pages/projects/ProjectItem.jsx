import "./ProjectItem.css";

function ProjectItem(props) {
  return (
    <a className="project-item__container" href="">
      <div className="project-item__pic-box">
        <img
          src={props.picture}
          className="project-item__picture"
          alt={props.title}
        />
      </div>
      <h4 className="project-item__title">{props.title}</h4>
    </a>
  );
}

export default ProjectItem;
