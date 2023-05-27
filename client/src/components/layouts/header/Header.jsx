import { useState } from "react";

import "./Header.css";
import Main from "../main/Main.jsx";
import Navbar from "./Navbar.jsx";
import NavBurger from "./NavBurger.jsx";
import NavSmallScreen from "./NavSmallScreen.jsx";
import PictureBox from "../../ui/PictureBox.jsx";

function Header() {
  const [navSmallScreenOpen, setNavSmallScreenOpen] = useState(false);

  return (
    <Main className="header">
      <div className="header__container">
        <a className="header__namelogo" href="/">
          <PictureBox
            className=""
            aspectRatio="2/3"
            img={"/icons/ij.svg"}
            alt="ij"
          />
        </a>
        <Navbar />
        <NavBurger setNavSmallScreenOpen={setNavSmallScreenOpen} />
      </div>
      {navSmallScreenOpen && (
        <NavSmallScreen setNavSmallScreenOpen={setNavSmallScreenOpen} />
      )}
    </Main>
  );
}

export default Header;
