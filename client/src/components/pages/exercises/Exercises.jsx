import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "./Exercises.css";
import ExercisesList from "./ExercisesList.jsx";

function Exercises() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [allExercises, setAllExercises] = useState([]);

  const fetchExercises = async () => {
    fetch("http://localhost:5000/api/exercises")
      .then((res) => res.json())
      .then((resData) => {
        const sortByDate = (a, b) => b.date - a.date;
        const exercisesData = resData.data.exercises.data;
        const categoriesData = resData.data.exercises.categories;
        setCategories(categoriesData);
        exercisesData.sort(sortByDate);
        setAllExercises(exercisesData);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchExercises();
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
        <div className="exercises">
          {categories.map((category) => (
            <ExercisesList
              key={category.name}
              category={category}
              allExercises={allExercises.filter(
                (item) => item.category === category.name
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Exercises;
