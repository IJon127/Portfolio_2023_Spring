import "./ExercisesItem.css";
import PictureBox from "../../ui/PictureBox";
import { motion } from "framer-motion";

function ExercisesItem({ exercise }) {
  const picUri = `images/exercises/${exercise.thumbnail}`;
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="exercises-item__container"
    >
      <a href={exercise.link} target="_blank" rel="noreferrer">
        <PictureBox aspectRatio="1/1" img={picUri} alt={exercise.date} />
        <h4 className="exercises-item__title">{exercise.date}</h4>
      </a>
    </motion.div>
  );
}

export default ExercisesItem;
