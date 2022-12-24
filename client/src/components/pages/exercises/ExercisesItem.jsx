import "./ExercisesItem.css";
import PictureBox from "../../ui/PictureBox";

function ExercisesItem(props) {
  return (
    <a className="exercises-item__container" href="">
      <PictureBox aspectRatio="1/1" img={props.img} alt={props.title} />
      <h4 className="exercises-item__title">{props.title}</h4>
    </a>
  );
}

export default ExercisesItem;
