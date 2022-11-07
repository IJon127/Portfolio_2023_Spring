const fs = require("fs");
const express = require("express");
const app = express();

const projects = JSON.parse(fs.readFileSync(`${__dirname}/data/projects.json`));

app.get("/", getRoot);
app.get("/projects", getProjects);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

function getRoot(req, res) {
  res.status(200).send("Hi from root!");
}

function getProjects(req, res) {
  res.status(200).json({
    status: "success",
    data: {
      projects,
    },
  });
}
