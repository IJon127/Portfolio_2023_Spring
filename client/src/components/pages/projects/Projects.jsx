import "./Projects.css";
import Tags from "../../ui/tags/Tags";
import ProjectsItem from "./ProjectsItem";

const projects = [
  {
    name: "all_colors_are_in_the_lights",
    thumbnail: "11.jpg",
    title: "All Colors are in The Light",
  },
  { name: "zooba_battle", thumbnail: "01.jpg", title: "Zooba Battle" },
  { name: "tree_shadow_lamp", thumbnail: "01.jpg", title: "Tree Shadow Lamp" },
  { name: "finger_spray", thumbnail: "01.jpg", title: "Finger Spray" },
  { name: "doggolinko", thumbnail: "01.png", title: "Doggolinko" },
  {
    name: "ibrijomeesean_ibrary",
    thumbnail: "01.png",
    title: "Ibrijomeesean Library",
  },
];

function Projects() {
  return (
    <div>
      <Tags />
      <div className="projects__container">
        {projects.map((project) => (
          <ProjectsItem key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
