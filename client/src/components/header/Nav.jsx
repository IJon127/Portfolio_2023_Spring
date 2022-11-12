import "./Nav.css";
import Navbar from "./Navbar";
import Navsocial from "./Navsocial";
import NavBurger from "./NavBurger";

function Nav() {
  return (
    <div className="nav">
      <Navbar />
      <Navsocial />
      <NavBurger />
    </div>
  );
}

export default Nav;
