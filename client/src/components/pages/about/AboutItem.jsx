import "./About.css";

function AboutItem(props) {
  return (
    <a className="About-item__container" href="">
      <h4 className="About-item__title">{props.title}</h4>
    </a>
  );
}

export default AboutItem;
