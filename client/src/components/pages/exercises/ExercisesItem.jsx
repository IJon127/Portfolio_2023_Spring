import "./ExercisesItem.css";
import PictureBox from "../../ui/PictureBox";

function ExercisesItem({ exercise }) {
  const picUri = `images/exercises/${exercise.thumbnail}`;
  return (
    <a className="exercises-item__container" href="ijon.art">
      <PictureBox aspectRatio="1/1" img={picUri} alt={exercise.date} />
      <h4 className="exercises-item__title">{exercise.date}</h4>
    </a>
  );
}

export default ExercisesItem;
