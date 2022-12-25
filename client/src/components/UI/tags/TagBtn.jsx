import "./TagBtn.css";
import { useState } from "react";

function TagBtn({ tag, active, setActiveTag }) {
  // const [active, setActive] = useState(props.active);
  // const clickHandler = () => {
  //   setActive(!active);
  // };

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
