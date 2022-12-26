import "./AboutItem.css";

function AboutItem({ firstLine, secondLine }) {
  return (
    <div className="about-item__container">
      <h4 className="about-item__title">{firstLine}</h4>
      <p>{secondLine}</p>
    </div>
  );
}

export default AboutItem;
