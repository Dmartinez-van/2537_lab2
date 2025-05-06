const express = require("express");
// const ejs = require("ejs");

const app = express();
const port = process.env.PORT || 3018;

const fs = require("fs");

// Middleware to serve static files from the 'public' directory
app.use(express.static("public"));

app.set("view engine", "ejs");

// Index
app.get("/", (req, res) => {
  app.locals.color = undefined;
  app.locals.size = undefined;
  res.render("index");
});

// Color Indexes
app.get("/:color{/:size}", (req, res) => {
  const color = req.params.color;
  app.locals.color = color;

  const size = req.params.size || undefined;
  app.locals.size = size;

  if (size != undefined) {
    res.render("color-size");
  } else {
    res.render("color");
  }
});

// // Color Pages with Sizes
// app.get("/blue/20", (req, res) => {
//   let html = fs.readFileSync(__dirname + "/app/html/blue20.html", "utf8");
//   res.send(html);
// });
// app.get("/blue/30", (req, res) => {
//   let html = fs.readFileSync(__dirname + "/app/html/blue30.html", "utf8");
//   res.send(html);
// });
// app.get("/blue/40", (req, res) => {
//   let html = fs.readFileSync(__dirname + "/app/html/blue40.html", "utf8");
//   res.send(html);
// });
// app.get("/red/20", (req, res) => {
//   let html = fs.readFileSync(__dirname + "/app/html/red20.html", "utf8");
//   res.send(html);
// });
// app.get("/red/30", (req, res) => {
//   let html = fs.readFileSync(__dirname + "/app/html/red30.html", "utf8");
//   res.send(html);
// });
// app.get("/red/40", (req, res) => {
//   let html = fs.readFileSync(__dirname + "/app/html/red40.html", "utf8");
//   res.send(html);
// });
// app.get("/green/20", (req, res) => {
//   let html = fs.readFileSync(__dirname + "/app/html/green20.html", "utf8");
//   res.send(html);
// });
// app.get("/green/30", (req, res) => {
//   let html = fs.readFileSync(__dirname + "/app/html/green30.html", "utf8");
//   res.send(html);
// });
// app.get("/green/40", (req, res) => {
//   let html = fs.readFileSync(__dirname + "/app/html/green40.html", "utf8");
//   res.send(html);
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
