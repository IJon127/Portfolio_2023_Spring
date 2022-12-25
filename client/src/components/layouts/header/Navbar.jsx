import "./Navbar.css";
import NavBtn from "./NavBtn";
import NavSocial from "./NavSocial";

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
