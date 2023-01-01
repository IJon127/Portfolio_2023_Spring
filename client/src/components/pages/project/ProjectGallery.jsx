import { useState } from "react";
import "./ProjectGallery.css";
import PictureBox from "../../ui/PictureBox";
import ProjectLightBox from "./ProjectLightBox";

function ProjectGallery({ project, gallery }) {
  const [lightBoxOpened, setLightBoxOpened] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const clickImgHandler = (index) => {
    setLightBoxOpened(true);
    setCurrentIndex(index);
  };

  return (
    <div className="project-gallery">
      {gallery.map((pic, index) => (
        <button key={index} onClick={() => clickImgHandler(index)}>
          <PictureBox
            className=""
            aspectRatio="1/1"
            img={`/images/projects/${project}/${pic}`}
            alt={project}
          />
        </button>
      ))}
      {lightBoxOpened && (
        <ProjectLightBox
          img={`/images/projects/${project}/${gallery[currentIndex]}`}
          setLightBoxOpened={setLightBoxOpened}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          arrayLength={gallery.length}
        />
      )}
    </div>
  );
}
export default ProjectGallery;
