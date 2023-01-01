import "./TagBtn.css";

function TagBtn({ tag, active, setActiveTag }) {
  let tagClass;
  if (active === true) {
    tagClass = "tag-btn tag-btn__clicked";
  } else {
    tagClass = "tag-btn";
  }
  const clickHandler = () => {
    setActiveTag(tag);
  };

  return (
    <button onClick={clickHandler} className={tagClass}>
      {tag}
    </button>
  );
}

export default TagBtn;
