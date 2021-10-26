const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const saucesRoutes = require("./routes/sauce");
const userRoutes = require("./routes/user");

// Connexion à la base de données avec mongoose
mongoose
  .connect(
    "mongodb+srv://floflx:Lauflo.126@cluster0.tkpnv.mongodb.net/Cluster0?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(helmet());

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
app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
