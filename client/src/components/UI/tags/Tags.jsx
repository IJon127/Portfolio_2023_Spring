import "./Tags.css";
import TagBtn from "./TagBtn";

function Tags() {
  const tagClickedHandler = () => {};

  return (
    <div className="tags__container">
      <TagBtn name="Show All" active={true} onTagClicked={tagClickedHandler} />
      <TagBtn name="Interactive Installation" active={false} />
      <TagBtn name="Projection Mapping" active={false} />
      <TagBtn name="Game Design" active={false} />
    </div>
  );
}

export default Tags;
