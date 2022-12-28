import "./Navbar.css";
//import NavBtn from "./NavBtn";
import NavSocial from "./NavSocial";
import { NavLink } from "react-router-dom";

function Navbar() {
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

  return (
    <div className="navbar">
      {navBtns.map((navBtn) => (
        <NavLink className="navbar__btn" key={navBtn.id} to={navBtn.link}>
          {navBtn.name}
        </NavLink>
      ))}
      <NavSocial />
    </div>
  );
}

export default Navbar;
