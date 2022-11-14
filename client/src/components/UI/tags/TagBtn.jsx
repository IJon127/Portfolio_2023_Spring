import "./TagBtn.css";

function TagBtn(props) {
  const clickHandler = () => {
    console.log("cccclick!");
  };

  return (
    <button onClick={clickHandler} className="tag-btn">
      {props.name}
    </button>
  );
}

export default TagBtn;
