import "./Navbar.css";
import NavBtn from "./NavBtn";
import NavSocial from "./NavSocial";

const navBtns = [
  {
    id: 0,
    name: "projects",
    link: "",
  },
  {
    id: 1,
    name: "exercises",
    link: "",
  },
  {
    id: 2,
    name: "papers",
    link: "",
  },
  {
    id: 3,
    name: "about",
    link: "",
  },
];

const createNavBtn = (navBtn) => {
  return <NavBtn key={navBtn.id} name={navBtn.name} link={navBtn.link} />;
};

function Navbar() {
  return (
    <div className="navbar">
      {navBtns.map(createNavBtn)}
      <NavSocial />
    </div>
  );
}

export default Navbar;
