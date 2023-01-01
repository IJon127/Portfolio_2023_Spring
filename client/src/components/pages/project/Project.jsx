import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Project.css";
import PictureBox from "../../ui/PictureBox";
import ProjectContent from "./ProjectContent";
import ProjectGallery from "./ProjectGallery";

function Project() {
  const params = useParams();
  const projectName = params.projectName;
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`api/projects/${projectName}`)
      .then((res) => res.json())
      .then((resData) => {
        setProject(resData.data.project);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [projectName]);

  if (isLoading) {
    return;
  }

  return (
    <div className="project">
      {project.videoURL && (
        <iframe
          className="project__video"
          title={project.name}
          src={project.videoURL}
          frameBorder="0"
        ></iframe>
      )}
      {!project.videoURL && (
        <PictureBox
          className="project__heroImg"
          aspectRatio="16/9"
          img={`/images/projects/${project.name}/${project.heroImage}`}
          alt={project.name}
        />
      )}
      <ProjectContent project={project} />
      {project.supportImages &&
        project.supportImages.map((pic) => (
          <img
            key={pic}
            className="project__supportImg"
            src={`/images/projects/${projectName}/${pic}`}
            alt={projectName}
          />
        ))}
      {project.gallery && (
        <ProjectGallery project={project.name} gallery={project.gallery} />
      )}
    </div>
  );
}
export default Project;
