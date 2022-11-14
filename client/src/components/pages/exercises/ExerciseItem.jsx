import "./ExerciseItem.css";

function ExerciseItem(props) {
  return (
    <a className="exercise-item__container" href="">
      <div className="exercise-item__pic-box">
        <img
          src={props.picture}
          className="exercise-item__picture"
          alt={props.title}
        />
      </div>
      <h4 className="exercise-item__title">{props.title}</h4>
    </a>
  );
}

export default ExerciseItem;
