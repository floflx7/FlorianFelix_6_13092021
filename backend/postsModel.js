const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://flo_flxweb:Lauflo.126@cluster0.404ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const PostModel = mongoose.model(
  "node-api",
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Data,
      default: Date.now,
    },
  },
  "posts"
);

module.exports = { PostModel };
