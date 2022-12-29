import ExercisesList from "./ExercisesList";
import { useState, useEffect } from "react";
import "./Exercises.css";

function Exercises() {
  const catagories = [
    {
      name: "creative coding",
      tags: ["Show All", "p5.js", "Processing", "openFrameworks", "OpenGL"],
    },
    { name: "3D", tags: ["Show All", "Blender"] },
  ];

  const [allExercises, setAllExercises] = useState([]);

  const fetchExercises = async () => {
    fetch("api/exercises")
      .then((res) => res.json())
      .then((resData) => {
        const sortByDate = (a, b) => b.date - a.date;
        const exercisesData = resData.data.exercises;
        exercisesData.sort(sortByDate);
        setAllExercises(exercisesData);
      });
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <div className="exercises">
      {catagories.map((category) => (
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
