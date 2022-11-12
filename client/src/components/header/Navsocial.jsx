import "./Navsocial.css";
import NavsocialBtn from "./NavsocialBtn";

import icon_github from "../../assets/icons/icon_github.svg";
import icon_instagram from "../../assets/icons/icon_instagram.svg";
import icon_linkedin from "../../assets/icons/icon_linkedin.svg";

function Navsocial() {
  return (
    <div className="navsocial">
      <NavsocialBtn
        icon={icon_github}
        alt="github"
        link="https://github.com/IJon127"
      />
      <NavsocialBtn
        icon={icon_instagram}
        alt="instagram"
        link="https://www.instagram.com/ijon.dosomething/"
      />
      <NavsocialBtn
        icon={icon_linkedin}
        alt="linkedin"
        link="https://www.linkedin.com/in/ijon-hsieh/"
      />
    </div>
  );
}

export default Navsocial;
