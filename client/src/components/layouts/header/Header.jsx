import "./Header.css";
import Main from "../main/Main";

import Navbar from "./Navbar";
import NavBurger from "./NavBurger";

function Header() {
  return (
    <Main className="header">
      <div className="header__container">
        <a className="header__namelogo" href="/">
          i j
        </a>
        <Navbar />
        <NavBurger />
      </div>
    </Main>
  );
}

export default Header;
