const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const bodyParser = require("body-parser");
const { PostsModel } = require("../postsModel");
const app = express();
router.get("/", (req, res) => {
  PostsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  });
});

app.post("/api/auth/signup", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    message: "Objet créé !",
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error creating new data : " + err);
  });
});

//update
router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("Id unknow : " + req.params.id);

  const updateRecord = {
    author: req.body.author,
    message: req.body.message,
  };

  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("Id unknow : " + req.params.id);
  PostsModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
});

module.exports = router;
