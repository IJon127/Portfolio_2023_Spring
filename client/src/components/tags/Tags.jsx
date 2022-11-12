import "./Tags.css";
import TagBtn from "./TagBtn";

function Tags() {
  return (
    <div className="tags__container">
      <TagBtn name="Show All" />
      <TagBtn name="Interactive Installation" />
      <TagBtn name="Projection Mapping" />
      <TagBtn name="Game Design" />
    </div>
  );
}

export default Tags;
