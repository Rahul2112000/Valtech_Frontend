 
const express = require("express");
let mongoose = require("mongoose");
const cors = require("cors");
const errorHandler = require("./utils").errorHandler;
const config = require("./config.json");
let app = express();
// middleware
app.use(express.json());
//app.use(express.static(__dirname + "/public"));
app.use(cors());
let url = `mongodb+srv://${config.username}:${config.userpassword}@${config.dbname}.${config.userstring}.mongodb.net/${config.dbname}?retryWrites=true&w=majority&appName=Valtech`;
 
mongoose
  .connect(url)
  .then((res) => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log("Error", error);
  });
 
// Schema
let Schema = mongoose.Schema;
// ObjectIds
let ObjectId = mongoose.Schema.ObjectId;
// Model
let User = mongoose.model(
  "User",
  new Schema({
    id: ObjectId,
    firstName: String,
    lastName: String,
    email: String,
  })
);
// CRUD
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });
app.post("/data", (req, res) => {
  let user = new User(req.body);
  user
    .save()
    .then((dbres) => res.send({ message: "Data was added", user: dbres }))
    .catch((error) => errorHandler);
});
app.get("/data", (req, res) => {
  User.find()
    .then((dbRes) => res.json(dbRes))
    .catch((error) => errorHandler);
});
 
// query record for update
app.put("/edit/:uid", (req, res) => {
  User.findById({ _id: req.params["uid"] })
    .then((dbRes) => res.send(dbRes))
    .catch((error) => errorHandler);
});
// data for update
app.put("/update/:uid", (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.params["uid"] },
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    }
  )
    .then((dbRes) =>
      res.send({ message: "hero info was updated", name: dbRes.firstName })
    )
    .catch((error) => errorHandler);
});
app.delete("/edit/:uid", (req, res) => {
  // console.log(req.params["uid"]);
  User.findByIdAndDelete({ _id: req.params["uid"] })
    .then((dbres) =>
      res.send({ message: "user was deleted", name: dbres.firstName })
    )
    .catch((error) => errorHandler);
});
 
app.listen(config.port, config.host, errorHandler);