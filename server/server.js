const fs = require("fs");
const express = require("express");
const app = express();

const projects = JSON.parse(fs.readFileSync(`${__dirname}/data/projects.json`));

app.get("/", getRoot);
app.get("/projects", getProjects);

const port = 8000;
app.listen(port, () => console.log(`Server started on port ${port}`));

function getRoot(req, res) {
  res.status(200).json({
    status: "success",
    data: "root",
  });
}

function getProjects(req, res) {
  res.status(200).json({
    status: "success",
    data: {
      projects,
    },
  });
}
