import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ExercisesList.css";
import Tags from "../../ui/tags/Tags.jsx";
import ExercisesItem from "./ExercisesItem.jsx";

function ExercisesList({ category, allExercises }) {
  const [activeTag, setActiveTag] = useState("Show All");
  const [filteredExercises, setFilteredExercises] = useState([]);

  useEffect(() => {
    setFilteredExercises(allExercises);
  }, [allExercises]);

  return (
    <div className="exercises-list">
      <h2 className="title">{category.name}</h2>
      <Tags
        tags={category.tags}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        setFilteredItems={setFilteredExercises}
        allItems={allExercises}
      />

      <motion.div layout className="exercises-list__container">
        <AnimatePresence>
          {filteredExercises.map((exercise) => (
            <ExercisesItem key={exercise.id} exercise={exercise} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default ExercisesList;
