import "./NavbarBtn.css";

function NavbarBtn(props) {
  return (
    <a className="navbar-btn" href={props.link}>
      {props.name}
    </a>
  );
}

export default NavbarBtn;
