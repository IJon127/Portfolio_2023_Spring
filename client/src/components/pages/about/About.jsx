import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "./About.css";
import AboutItem from "./AboutItem.jsx";

function About() {
  const [loading, setLoading] = useState(true);
  const [allExperiences, setAllExperiences] = useState([]);
  const [allEducation, setAllEducation] = useState([]);

  const fetchAbout = async () => {
    fetch("api/about")
      .then((res) => res.json())
      .then((resData) => {
        setAllExperiences(resData.data.about.experiences);
        setAllEducation(resData.data.about.education);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <div>
      {loading && (
        <PulseLoader
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {!loading && (
        <div>
          <div className="about__container">
            <h2 className="title">Education</h2>
            {allEducation.map((education, index) => (
              <AboutItem
                key={index}
                firstLine={education.program}
                secondLine={education.school}
              />
            ))}
          </div>
          <div className="about__container">
            <h2 className="title">Experiences</h2>
            {allExperiences.map((experience, index) => (
              <AboutItem
                key={index}
                firstLine={`${experience.company}, ${experience.location}`}
                secondLine={`${experience.role}, ${experience.time}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
