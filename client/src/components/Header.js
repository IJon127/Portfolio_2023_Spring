import "./Header.css";

import icon_github from "../assets/icons/icon_github.svg";
import icon_instagram from "../assets/icons/icon_instagram.svg";

function Header() {
  return (
    <div className="header__container">
      <a className="header__namelogo" href="../index.html">
        i j
      </a>
      <nav className="header__navbar">
        <a className="header__btn" href="../index.html#featured">
          projects
        </a>
        <a className="header__btn" href="#exercises">
          exercises
        </a>
        <a className="header__btn" href="#about">
          about
        </a>
        <a className="header__social-btn" href="https://github.com/IJon127">
          <img src={icon_github} className="header__social-icon" alt="github" />
        </a>
        <a
          className="header__social-btn"
          href="https://www.instagram.com/ijon.dosomething/"
        >
          <img
            src={icon_instagram}
            className="header__social-icon"
            alt="instagram"
          />
        </a>
      </nav>
      <nav className="header__burger">
        <div className="nav_burger_line nav_burger_line_top"></div>
        <div className="nav_burger_line nav_burger_line_bottom"></div>
      </nav>
    </div>
  );
}

export default Header;
