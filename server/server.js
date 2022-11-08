const fs = require("fs");
const express = require("express");
const app = express();

//read and parse the data files
const projects = JSON.parse(fs.readFileSync(`${__dirname}/data/projects.json`));
const creativeCoding = JSON.parse(
  fs.readFileSync(`${__dirname}/data/exercises/creativeCoding.json`)
);
const model3D = JSON.parse(
  fs.readFileSync(`${__dirname}/data/exercises/model3D.json`)
);

app.get("/", getRoot);
app.get("/projects", getProjects);
app.get("/exercises", getExercises);
app.get("/about", getAbout);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

//get requests callback functions------------------

function getRoot(req, res) {
  res.status(200).send("<h1>Home page! from NODE.js</h1>");
}

function getProjects(req, res) {
  res.status(200).json({
    status: "success",
    result: projects.length,
    data: {
      projects,
    },
  });
}

function getAbout(req, res) {
  res.status(200).send("About me page");
}

function getExercises(req, res) {
  res.status(200).json({
    status: "success",
    result: creativeCoding.length + model3D.length,
    data: {
      creativeCoding,
      model3D,
    },
  });
}

//post requests callback functions----------------------

//function postProjectsTag(req, res) {}
