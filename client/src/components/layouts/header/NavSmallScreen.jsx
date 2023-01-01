import { createPortal } from "react-dom";

import "./NavSmallScreen.css";
import NavSocial from "./NavSocial";
import Main from "../../layouts/main/Main";
import { NavLink } from "react-router-dom";

function NavSmallScreen({ setNavSmallScreenOpen }) {
  const navBtns = [
    {
      id: 0,
      name: "projects",
      link: "projects",
    },
    {
      id: 1,
      name: "exercises",
      link: "exercises",
    },
    {
      id: 2,
      name: "papers",
      link: "papers",
    },
    {
      id: 3,
      name: "about",
      link: "about",
    },
  ];

  return createPortal(
    <div className="nav-small-screen" scroll="no">
      <Main>
        <button
          onClick={() => setNavSmallScreenOpen(false)}
          className="nav-small-screen__close-btn"
        >
          ✕
        </button>
      </Main>
      <div className="nav-small-screen__container">
        {navBtns.map((navBtn) => (
          <NavLink
            className="nav-small-screen__btn"
            key={navBtn.id}
            to={navBtn.link}
            onClick={() => setNavSmallScreenOpen(false)}
          >
            {navBtn.name}
          </NavLink>
        ))}
        <NavSocial />
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default NavSmallScreen;
