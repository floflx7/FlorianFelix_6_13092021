const express = require("express");
const app = express();
require("./dbConfig");
const postsRoutes = require("./routes/postsControllers");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());

app.use(cors());

app.use("/posts", postsRoutes);

app.listen(3000, () => console.log("Server started: 3000"));
