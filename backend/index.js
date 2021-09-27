const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 5]);
});

app.listen(3000, () => console.log("Listen on port 3000"));
