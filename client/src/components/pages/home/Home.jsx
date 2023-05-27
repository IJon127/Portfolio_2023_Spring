import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "./Home.css";
import HomeSlide from "./HomeSlide";
// import PictureBox from "../../ui/PictureBox.jsx";

function Home() {
  const [loading, setLoading] = useState(true);
  const [allIntros, setAllIntros] = useState([]);
  const [allSlides, setAllSlides] = useState([]);

  const fetchHome = async () => {
    fetch("http://localhost:5000/api/home")
      .then((res) => res.json())
      .then((resData) => {
        setAllIntros(resData.data.home.intro);
        setAllSlides(resData.data.home.slides);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHome();
  }, []);

  return (
    <div className="home">
      <div className="home__text">
        <h2 className="title">I-Jon Hsieh</h2>
        <div>
          {true && (
            <PulseLoader
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
          {!loading && (
            <div>
              {allIntros.map((intro) => (
                <p>{intro}</p>
              ))}
            </div>
          )}
        </div>
      </div>
      <HomeSlide images={allSlides} interval={5000} />
      {/* <PictureBox
        className="home__img"
        aspectRatio=""
        img={"images/projects/tree_shadow_lamp/01.jpg"}
        alt="home image"
      /> */}
    </div>
  );
}

export default Home;
