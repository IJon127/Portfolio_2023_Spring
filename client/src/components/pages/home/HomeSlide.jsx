import React, { useState, useEffect } from "react";
import PictureBox from "../../ui/PictureBox.jsx";

function HomeSlide({ images, interval }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, interval - 1000); // Start fade out 1 second before image change

    const nextImageTimer = setTimeout(() => {
      setCurrentImage(nextImage);
      setNextImage((nextImage + 1) % images.length);
      setFade(false);
    }, interval);

    return () => {
      clearTimeout(timer);
      clearTimeout(nextImageTimer);
    };
  }, [currentImage, nextImage, images.length, interval]);

  return (
    <div className="home__slide">
      <PictureBox
        className={`home__img home__img-current ${
          fade ? "fade-out" : "fade-in"
        }`}
        aspectRatio=""
        img={images[currentImage]}
        alt="home slides"
      />
      <PictureBox
        className={`home__img home__img-next`}
        aspectRatio=""
        img={images[nextImage]}
        alt="home slides"
      />
    </div>
  );
}

export default HomeSlide;
