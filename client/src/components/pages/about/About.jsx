import "./About.css";
import AboutItem from "./AboutItem";
import { useState, useEffect } from "react";

function About() {
  const [allExperiences, setAllExperiences] = useState([]);
  const [allEducation, setAllEducation] = useState([]);

  const fetchAbout = async () => {
    fetch("api/about")
      .then((res) => res.json())
      .then((resData) => {
        setAllExperiences(resData.data.about.experiences);
        setAllEducation(resData.data.about.education);
      });
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <div>
      <div className="about__container">
        <h2 className="title">Education</h2>
        {allEducation.map((education) => (
          <AboutItem
            firstLine={education.program}
            secondLine={education.school}
          />
        ))}
      </div>
      <div className="about__container">
        <h2 className="title">Experiences</h2>
        {allExperiences.map((experience) => (
          <AboutItem
            firstLine={`${experience.company}, ${experience.location}`}
            secondLine={`${experience.role}, ${experience.time}`}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
