import "./NavBtn.css";

function NavBtn(props) {
  return (
    <a className="nav-btn" href={props.link}>
      {props.name}
    </a>
  );
}

export default NavBtn;
