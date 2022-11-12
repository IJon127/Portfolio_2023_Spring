import "./ProjectItem.css";

function ProjectItem(props) {
  return (
    <div className="project-item__container">
      <div className="project-item__pic-box">
        <img
          src={props.picture}
          className="project-item__picture"
          alt={props.title}
        />
      </div>
      <h4 className="project-item__title">{props.title}</h4>
    </div>
  );
}

export default ProjectItem;
