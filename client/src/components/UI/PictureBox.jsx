import "./PictureBox.css";

function PictureBox(props) {
  const classes = "picture-box " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default PictureBox;
