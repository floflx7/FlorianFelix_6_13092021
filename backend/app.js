const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: process.cwd() + "/.env" });

const userRoutes = require("./routes/user");

// Connexion à la base de données avec mongoose
mongoose.connect(
  "mongodb+srv://floflx:Lauflo.126@cluster0.tkpnv.mongodb.net/Cluster0?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err) => {
    if (!err) console.log("MongoDb connected");
    else console.log("Connection error :" + err);
  }
);
const app = express();

// Définition de headers pour éviters les erreurs de CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

// Enregistrement des routeurs
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/auth", userRoutes);

module.exports = app;
