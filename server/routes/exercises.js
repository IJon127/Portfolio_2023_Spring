const fs = require("fs");
const express = require("express");
const router = express.Router();

// 1) LOAD DATA ==========================================
const exercises = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/exercises.json`)
);

// 3) ROUTE HANDLERS =====================================
function getExercises(req, res) {
  res.status(200).json({
    status: "success",
    result: exercises.length,
    data: {
      exercises,
    },
  });
}

// 4) ROUTES =============================================
router.get("/", getExercises);

// 5) EXPORT ROUTER ======================================
module.exports = router;
