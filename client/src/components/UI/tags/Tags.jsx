import "./Tags.css";
import TagBtn from "./TagBtn";

function Tags({ tags }) {
  const tagClickedHandler = () => {};

  return (
    <div className="tags__container">
      <TagBtn name="Show All" active={true} onTagClicked={tagClickedHandler} />
      {tags.map((tag) => (
        <TagBtn key={tag} name={tag} active={false} />
      ))}
    </div>
  );
}

export default Tags;
