import "./Projects.css";
import Tags from "../../ui/tags/Tags";
import ProjectsItem from "./ProjectsItem";
import { useState, useEffect } from "react";
//import axios from "axios";

const tags = [
  "Installation",
  "Projection",
  "Game Design",
  "Product Design",
  "Architecture",
];

function Projects() {
  const [activeTag, setActiveTag] = useState("Show All");
  const [projects, setProjects] = useState([
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
  ]);

  // const fetchProjects = async () => {
  //   const res = await fetch("http://localhost:5000/api/projects");
  //   const data = await res.json();
  //   console.log(data);
  // };

  const fetchProjects = async () => {
    const res = await fetch("api/projects");
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

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
