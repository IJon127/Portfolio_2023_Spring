import "./Projects.css";
import Tags from "../../ui/tags/Tags";
import ProjectsItem from "./ProjectsItem";

const tags = [
  "Installation",
  "Projection",
  "Game Design",
  "Product Design",
  "Architecture",
];

const projects = [
  {
    name: "all_colors_are_in_the_lights",
    thumbnail: "11.jpg",
    title: "All Colors are in The Light",
    tags: ["Installation", "Game Design", "Projection"],
  },
  {
    name: "zooba_battle",
    thumbnail: "01.jpg",
    title: "Zooba Battle",
    tags: ["Installation", "Game Design"],
  },
  {
    name: "tree_shadow_lamp",
    thumbnail: "01.jpg",
    title: "Tree Shadow Lamp",
    tags: ["Installation", "Product Design", "Projection"],
  },
  {
    name: "finger_spray",
    thumbnail: "01.jpg",
    title: "Finger Spray",
    tags: ["Installation"],
  },
  {
    name: "doggolinko",
    thumbnail: "01.png",
    title: "Doggolinko",
    tags: ["Product Design"],
  },
  {
    name: "ibrijomeesean_ibrary",
    thumbnail: "01.png",
    title: "Ibrijomeesean Library",
    tags: ["Product Design", "Game Design"],
  },
];

function Projects() {
  return (
    <div>
      <Tags tags={tags} />
      <div className="projects__container">
        {projects.map((project) => (
          <ProjectsItem key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
