import "./Navbar.css";
import NavBtn from "./NavbarBtn";

function Navbar() {
  return (
    <div className="navbar">
      <NavBtn name="projects" link="" />
      <NavBtn name="exercses" link="" />
      <NavBtn name="about" link="" />
      <NavBtn name="contact" link="" />
    </div>
  );
}

export default Navbar;
