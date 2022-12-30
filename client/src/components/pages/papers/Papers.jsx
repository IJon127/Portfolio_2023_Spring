import "./Papers.css";
import { useState, useEffect } from "react";

function Papers() {
  const [allPapers, setAllPapers] = useState([]);

  const fetchPapers = async () => {
    fetch("api/papers")
      .then((res) => res.json())
      .then((resData) => {
        setAllPapers(resData.data.papers);
      });
  };

  useEffect(() => {
    fetchPapers();
  }, []);

  return (
    <div>
      {allPapers.map((paper) => (
        <div key={paper.name} className="papers__container">
          <h3 className="papers__title">{paper.title}</h3>
          <p>{paper.abstract}</p>
          <div className="readMore-btn-container">
            <a
              className="readMore-btn"
              href={`/papers/${paper.name}.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              full text →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Papers;
