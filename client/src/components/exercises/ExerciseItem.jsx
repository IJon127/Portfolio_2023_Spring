import "./ExerciseItem.css";

function ExerciseItem(props) {
  return (
    <div className="exercise-item__container">
      <div className="exercise-item__pic-box">
        <img
          src={props.picture}
          className="exercise-item__picture"
          alt={props.title}
        />
      </div>
      <h4 className="exercise-item__title">{props.title}</h4>
    </div>
  );
}

export default ExerciseItem;
