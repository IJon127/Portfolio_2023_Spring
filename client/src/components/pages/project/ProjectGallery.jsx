import "./ProjectGallery.css";
import PictureBox from "../../ui/PictureBox";

function ProjectGallery({ project, gallery }) {
  return (
    <div className="project-gallery">
      {gallery.map((pic) => (
        <button>
          <PictureBox
            className=""
            aspectRatio="1/1"
            img={`images/projects/${project}/${pic}`}
            alt={project}
          />
        </button>
      ))}
    </div>
  );
}
export default ProjectGallery;
