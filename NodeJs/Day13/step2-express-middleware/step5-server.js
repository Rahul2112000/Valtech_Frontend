const express = require("express");
let mongoose = require("mongoose");
const errorHandler = require("./utils").errorHandler;
const config = require("./config.json");
let app = express();
//middleware exchange data between client and server
app.use(express.json());
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
// app.get("/", (req, res) => {});


app.post("/data", (req, res) => {
  let user = new User(req.body);
  user
    .save()
    .then((dbres) =>
      res.statusCode(200).send({ message: "Data was added", user: dbres })
    )
    .catch((error) => errorHandler);
});
app.get("/data", (req, res) => {
  User.find()
    .then((dbRes) => res.json(dbRes))
    .catch((error) => errorHandler);
});
/* app.put("/edit/:uid", (req, res) => {});
app.delete("/edit/:uid", (req, res) => {}); */
 
app.listen(config.port, config.host, errorHandler);