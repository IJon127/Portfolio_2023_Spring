const fs = require("fs");
const express = require("express");

const projectsRoutes = require(`${__dirname}/routes/projects`);
const exercisesRoutes = require(`${__dirname}/routes/exercises`);
const papersRoutes = require(`${__dirname}/routes/papers`);
const aboutRoutes = require(`${__dirname}/routes/about`);
const contactRoutes = require(`${__dirname}/routes/contact`);

const app = express();

// 1) LOAD DATA ==========================================

// 2) MIDDLEWARES ========================================
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// 3) ROUTE HANDLERS =====================================

function getRoot(req, res) {
  res.status(200).send("<h1>Home page! from NODE.js</h1>");
}

// 4) ROUTES =============================================
app.get("/api/", getRoot);
app.use("/api/projects", projectsRoutes);
app.use("/api/exercises", exercisesRoutes);
app.use("/api/papers", papersRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/contact", contactRoutes);

// 5) START SERVER ========================================
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
