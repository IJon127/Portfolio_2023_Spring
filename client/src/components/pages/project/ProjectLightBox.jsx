import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import "./ProjectLightBox.css";
import Main from "../../layouts/main/Main.jsx";

function ProjectLightBox({
  className,
  img,
  setLightBoxOpened,
  setCurrentIndex,
  currentIndex,
  arrayLength,
}) {
  const classes = "project-light-box " + className;
  const [showBackArrow, setShowBackArrow] = useState(true);
  const [showNextArrow, setShowNextArrow] = useState(true);

  const clickArrowHandler = (increment) => {
    const updateIndex = (currentIndex += increment);
    setCurrentIndex(updateIndex);
  };
  useEffect(() => {
    if (currentIndex === 0) {
      setShowBackArrow(false);
      setShowNextArrow(true);
    } else if (currentIndex === arrayLength - 1) {
      setShowBackArrow(true);
      setShowNextArrow(false);
    } else {
      setShowBackArrow(true);
      setShowNextArrow(true);
    }
  }, [currentIndex, arrayLength]);

  return createPortal(
    <div className={classes} scroll="no">
      <Main className="project-light-box__close-btn-container">
        <button
          onClick={() => setLightBoxOpened(false)}
          className="project-light-box__close-btn"
        >
          ✕
        </button>
      </Main>
      <img className="project-light-box__img" src={img} alt="" />
      <Main className="project-light-box__arrow-container">
        {showBackArrow && (
          <button
            onClick={() => clickArrowHandler(-1)}
            className="project-light-box__arrow"
          >
            &#8249;
          </button>
        )}
        {showNextArrow && (
          <button
            onClick={() => clickArrowHandler(1)}
            className="project-light-box__arrow project-light-box__arrow-next"
          >
            &#8250;
          </button>
        )}
      </Main>
    </div>,

    document.getElementById("modal")
  );
}

export default ProjectLightBox;
