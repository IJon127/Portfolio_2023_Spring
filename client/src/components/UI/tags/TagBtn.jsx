import "./TagBtn.css";
import { useState } from "react";

function TagBtn(props) {
  const [active, setActive] = useState(props.active);
  const clickHandler = () => {
    setActive(!active);
  };

  let tagClass;
  if (active === true) {
    tagClass = "tag-btn tag-btn__clicked";
  } else {
    tagClass = "tag-btn";
  }

  return (
    <button onClick={clickHandler} className={tagClass}>
      {props.name}
    </button>
  );
}

export default TagBtn;
