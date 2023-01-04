import ExercisesList from "./ExercisesList";
import { useState, useEffect } from "react";
import "./Exercises.css";

function Exercises() {
  const [categories, setCategories] = useState([]);
  const [allExercises, setAllExercises] = useState([]);

  const fetchExercises = async () => {
    fetch("api/exercises")
      .then((res) => res.json())
      .then((resData) => {
        const sortByDate = (a, b) => b.date - a.date;
        const exercisesData = resData.data.exercises.data;
        const categoriesData = resData.data.exercises.categories;
        setCategories(categoriesData);
        exercisesData.sort(sortByDate);
        setAllExercises(exercisesData);
      });
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
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
  );
}

export default Exercises;
