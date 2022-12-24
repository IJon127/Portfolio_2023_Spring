import "./ExercisesList.css";
import Tags from "../../ui/tags/Tags";
import ExercisesItem from "./ExercisesItem";

//import projectPic_allcolor from "../../../assets/images/projects/all_colors_are_in_the_lights/11.jpg";
//import projectPic_zooba from "../../../assets/images/projects/zooba_battle/index.JPG";

const projects = ["10/11/2022", "09/11/2022", "12/12/2021", "12/10/2020"];

function ExercisesList(props) {
  return (
    <div className="exercises-list">
      <h2 className="title">{props.category}</h2>
      <Tags />
      <div className="exercises-list__container">
        {/* <ExercisesItem title={projects[0]} img={projectPic_allcolor} />
        <ExercisesItem title={projects[1]} img={projectPic_zooba} />
        <ExercisesItem title={projects[2]} img={projectPic_allcolor} />
        <ExercisesItem title={projects[3]} img={projectPic_allcolor} />
        <ExercisesItem title={projects[0]} img={projectPic_allcolor} />
        <ExercisesItem title={projects[1]} img={projectPic_zooba} />
        <ExercisesItem title={projects[2]} img={projectPic_allcolor} />
        <ExercisesItem title={projects[3]} img={projectPic_allcolor} /> */}
      </div>
    </div>
  );
}

export default ExercisesList;
