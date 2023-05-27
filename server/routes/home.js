const fs = require("fs");
const express = require("express");
const router = express.Router();

// 1) LOAD DATA ==========================================
const home = JSON.parse(fs.readFileSync(`${__dirname}/../data/home.json`));

// 3) ROUTE HANDLERS =====================================
function getHome(req, res) {
  res.status(200).json({
    status: "success",
    result: home.length,
    data: {
      home,
    },
  });
}

// 4) ROUTES =============================================
router.get("/", getHome);

// 5) EXPORT ROUTER ======================================
module.exports = router;
