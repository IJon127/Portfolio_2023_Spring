import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "./Papers.css";

function Papers() {
  const [loading, setLoading] = useState(true);
  const [allPapers, setAllPapers] = useState([]);

  const fetchPapers = async () => {
    fetch("http://localhost:5000/api/papers")
      .then((res) => res.json())
      .then((resData) => {
        setAllPapers(resData.data.papers);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPapers();
  }, []);

  return (
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
      )}
    </div>
  );
}

export default Papers;
