import "./Projects.css";
import Tags from "../../ui/tags/Tags";
import ProjectItem from "./ProjectItem";
import projectPic_allcolor from "../../../assets/images/projects/all_colors_are_in_the_lights/index.jpg";
import projectPic_zooba from "../../../assets/images/projects/zooba_battle/index.JPG";

const projects = [
  "All Colors Are In The Light",
  "Zooba Battle",
  "Tree Shadow Lamp",
  "Finger Spray",
];

function Projects() {
  return (
    <div>
      <Tags />
      <div className="projects__container">
        <ProjectItem title={projects[0]} picture={projectPic_allcolor} />
        <ProjectItem title={projects[1]} picture={projectPic_zooba} />
        <ProjectItem title={projects[2]} picture={projectPic_allcolor} />
        <ProjectItem title={projects[3]} picture={projectPic_allcolor} />
      </div>
    </div>
  );
}

export default Projects;
