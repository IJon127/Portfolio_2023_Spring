import "./Header.css";
import Wrapper from "../UI/Wrapper";

import Nav from "./Nav";

function Header() {
  return (
    <Wrapper className="header">
      <div className="header__container">
        <a className="header__namelogo" href="../index.html">
          i j
        </a>
        <Nav />
      </div>
    </Wrapper>
  );
}

export default Header;
