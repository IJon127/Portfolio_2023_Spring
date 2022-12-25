import ExercisesList from "./ExercisesList";
import { useState, useEffect } from "react";

function Exercises() {
  const catagories = [
    {
      name: "creative coding",
      tags: ["Show All", "p5.js", "Processing", "Openframworks", "OpenGL"],
    },
    { name: "3D", tags: ["Show All", "Blender"] },
    { name: "game dev", tags: ["Show All", "Unity"] },
  ];
  //let allExercisesData;
  const [allExercises, setAllExercises] = useState([]);

  const fetchExercises = async () => {
    const res = await fetch("api/exercises");
    const dataIn = await res.json();
    setAllExercises(dataIn.data.exercises);
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <div className="">
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
