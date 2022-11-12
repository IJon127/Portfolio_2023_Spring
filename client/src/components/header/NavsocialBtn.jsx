import "./NavsocialBtn.css";

function NavsocialBtn(props) {
  return (
    <a className="navsocial__btn" href={props.link}>
      <img src={props.icon} alt={props.alt} />
    </a>
  );
}

export default NavsocialBtn;
