import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import "./Project.css";
import PictureBox from "../../ui/PictureBox.jsx";
import ProjectContent from "./ProjectContent.jsx";
import ProjectGallery from "./ProjectGallery.jsx";

function Project() {
  const params = useParams();
  const projectName = params.projectName;
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/projects/${projectName}`)
      .then((res) => res.json())
      .then((resData) => {
        setProject(resData.data.project);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [projectName]);

  return (
    <div>
      {loading && (
        <PulseLoader
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {!loading && (
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
          {project.supportVideoURL && (
            <iframe
              className="project__supportVideo"
              title={project.name}
              src={project.supportVideoURL}
              frameBorder="0"
            ></iframe>
          )}
          {project.gallery && (
            <ProjectGallery project={project.name} gallery={project.gallery} />
          )}
        </div>
      )}
    </div>
  );
}
export default Project;
