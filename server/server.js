const fs = require("fs");
const express = require("express");
const app = express();

// 1) LOAD DATA ==========================================
const projects = JSON.parse(fs.readFileSync(`${__dirname}/data/projects.json`));
const creativeCoding = JSON.parse(
  fs.readFileSync(`${__dirname}/data/exercises/creativeCoding.json`)
);
const threeD = JSON.parse(
  fs.readFileSync(`${__dirname}/data/exercises/threeD.json`)
);

// 2) MIDDLEWARES ========================================
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// 3) ROUTE HANDLERS =====================================

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

function getProjectById(req, res) {
  const project = projects.find((el) => el.id === req.params.id);

  if (!project) {
    return res
      .status(404)
      .send("<h1>404...sorry I don't have this project</h1>");
  }

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
}

function getExercises(req, res) {
  res.status(200).json({
    status: "success",
    result: creativeCoding.length + threeD.length,
    data: {
      creativeCoding,
      threeD,
    },
  });
}

function getExercisesByCategory(req, res) {
  const category = req.params.category;

  if (category == "creative_coding") {
    res.status(200).json({
      status: "success",
      data: {
        creativeCoding,
      },
    });
  } else if (category == "3d") {
    res.status(200).json({
      status: "success",
      data: {
        threeD,
      },
    });
  } else {
    return res.status(404).send("<h1>404...No such Category</h1>");
  }
}

function getAbout(req, res) {
  res.status(200).send("About me page");
}

function getContact(req, res) {
  res.status(200).send("Contact page");
}

function postContact(req, res) {
  res.status(201).send("email me");
}

// 4) ROUTES =============================================
app.get("/", getRoot);
app.get("/projects", getProjects);
app.get("/projects/:id", getProjectById);
app.get("/exercises", getExercises);
app.get("/exercises/:category", getExercisesByCategory);
app.get("/about", getAbout);
app.route("/contact").get(getContact).post(postContact);

// 5) START SERVER ========================================
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
