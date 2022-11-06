import "./ProjectList.css";
import ProjectItem from "./ProjectItem";
import projectPic_allcolor from "../assets/images/projects/allcolor/index.jpg";
import projectPic_zooba from "../assets/images/projects/zooba/index.JPG";

const projects = [
  "All Colors Are In The Light",
  "Zooba Battle",
  "Tree Shadow Lamp",
  "Finger Spray",
];

function ProjectList() {
  return (
    <div className="project-list__container">
      <ProjectItem
        className="project-list__item"
        title={projects[0]}
        picture={projectPic_allcolor}
      ></ProjectItem>
      <ProjectItem
        className="project-list__item"
        title={projects[1]}
        picture={projectPic_zooba}
      ></ProjectItem>
      <ProjectItem
        className="project-list__item"
        title={projects[2]}
        picture={projectPic_allcolor}
      ></ProjectItem>
      <ProjectItem
        className="project-list__item"
        title={projects[3]}
        picture={projectPic_allcolor}
      ></ProjectItem>
    </div>
  );
}

export default ProjectList;
