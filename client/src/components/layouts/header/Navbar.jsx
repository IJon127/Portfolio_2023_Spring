import { NavLink } from "react-router-dom";
import "./Navbar.css";
import NavSocial from "./NavSocial.jsx";

function Navbar({ className }) {
  const navBtns = [
    {
      name: "projects",
      link: "projects",
    },
    {
      name: "exercises",
      link: "exercises",
    },
    {
      name: "papers",
      link: "papers",
    },
    {
      name: "about",
      link: "about",
    },
    {
      name: "contact",
      link: "contact",
    },
  ];

  return (
    <div className="navbar">
      {navBtns.map((navBtn, index) => (
        <NavLink className="navbar__btn" key={index} to={navBtn.link}>
          {navBtn.name}
        </NavLink>
      ))}
      <NavSocial />
    </div>
  );
}

export default Navbar;
