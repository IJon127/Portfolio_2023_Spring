import "./ExerciseList.css";
import Tags from "../../ui/tags/Tags";
import ExerciseItem from "./ExerciseItem";

import projectPic_allcolor from "../../../assets/images/projects/all_colors_are_in_the_lights/index.jpg";
import projectPic_zooba from "../../../assets/images/projects/zooba_battle/index.JPG";

const projects = ["10/11/2022", "09/11/2022", "12/12/2021", "12/10/2020"];

function ExerciseList(props) {
  return (
    <div className="exercise-list">
      <h2 className="exercise-list__category">{props.category}</h2>
      <Tags />
      <div className="exercise-list__container">
        <ExerciseItem title={projects[0]} picture={projectPic_allcolor} />
        <ExerciseItem title={projects[1]} picture={projectPic_zooba} />
        <ExerciseItem title={projects[2]} picture={projectPic_allcolor} />
        <ExerciseItem title={projects[3]} picture={projectPic_allcolor} />
        <ExerciseItem title={projects[0]} picture={projectPic_allcolor} />
        <ExerciseItem title={projects[1]} picture={projectPic_zooba} />
        <ExerciseItem title={projects[2]} picture={projectPic_allcolor} />
        <ExerciseItem title={projects[3]} picture={projectPic_allcolor} />
      </div>
    </div>
  );
}

export default ExerciseList;
