import "./ProjectList.css";
import ProjectItem from "./ProjectItem";
import projectPic_allcolor from "../../assets/images/projects/all_colors_are_in_the_lights/index.jpg";
import projectPic_zooba from "../../assets/images/projects/zooba_battle/index.JPG";

const projects = [
  "All Colors Are In The Light",
  "Zooba Battle",
  "Tree Shadow Lamp",
  "Finger Spray",
];

function ProjectList() {
  return (
    <div className="project-list__container">
      <ProjectItem title={projects[0]} picture={projectPic_allcolor} />
      <ProjectItem title={projects[1]} picture={projectPic_zooba} />
      <ProjectItem title={projects[2]} picture={projectPic_allcolor} />
      <ProjectItem title={projects[3]} picture={projectPic_allcolor} />
    </div>
  );
}

export default ProjectList;
