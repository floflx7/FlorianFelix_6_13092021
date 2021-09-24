const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://floflx:Lauflo.126@cluster0.tkpnv.mongodb.net/api-post?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
