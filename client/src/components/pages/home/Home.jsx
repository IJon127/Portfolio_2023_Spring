import "./Home.css";
import PictureBox from "../../ui/PictureBox";

function Home() {
  return (
    <div className="home">
      <div className="home__text">
        <h2 className="title">I-Jon Hsieh</h2>
        <p>
          I am a New York based creative technologist and architect from Taiwan.
          My main focus is combining daily observation and natural phenomena
          into interactable art pieces, including interactive installations,
          generative art, games, and websites.
        </p>
      </div>
      <PictureBox
        className="home__img"
        aspectRatio=""
        img={"images/projects/tree_shadow_lamp/01.jpg"}
        alt="home image"
      />
    </div>
  );
}

export default Home;
