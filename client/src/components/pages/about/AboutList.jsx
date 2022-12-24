import "./About.css";
import Tags from "../../ui/tags/Tags";
import AboutItem from "./AboutItem";

const projects = ["10/11/2022", "09/11/2022", "12/12/2021", "12/10/2020"];

function AboutList(props) {
  return (
    <div className="exercise-list">
      <h2 className="title">{props.category}</h2>
      <div className="exercise-list__container">
        <AboutItem title={projects[0]} />
        <AboutItem title={projects[1]} />
        <AboutItem title={projects[2]} />
        <AboutItem title={projects[3]} />
        <AboutItem title={projects[0]} />
        <AboutItem title={projects[1]} />
        <AboutItem title={projects[2]} />
        <AboutItem title={projects[3]} />
      </div>
    </div>
  );
}

export default AboutList;
