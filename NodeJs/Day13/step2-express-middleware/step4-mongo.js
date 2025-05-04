const express = require("express");
const config = require("./config.json");
const e = require("express");
const errorHandler = require("./utils.js").errorHandler;
let app = express();
let mongoose = require("mongoose");

let url = `mongodb+srv://${config.username}:${config.userpassword}@valtech.${config.userstring}.mongodb.net/${config.dbname}?retryWrites=true&w=majority&appName=Valtech`;

//middleware

//settings
mongoose
  .connect(url)
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error in connecting to MongoDB", error);
  });

//objectid
let ObjectId = mongoose.Schema.ObjectId;
//schema
let Schema = mongoose.Schema;
let User = mongoose.model(
  "User",
  new Schema({
    id: ObjectId,
    firstName: String,
    lastName: String,
    email: String,
  })
);



//create

// setTimeout(() => {
//   let user=new User({

//     firstName:"Rahul",
//     lastName:"Saini",
//     email:"NoLadayi@valtech.com"
//   });
//    //model
//   user.save().then(dres=>console.log("data added in DB ",dbres)).catch((error)=>errorHandler);
//   },2000);

//reading

setTimeout(() => {
  User.find().then((dbres) => {
    console.log("data from DB ", dbres);
  }).catch((error) => errorHandler);
}
, 2000);

//update

// setTimeout(() => {
//   User.findByIdAndUpdate("6808d5f1a6f06073f8f143ef", { lastName: "Khatri" })
//     .then((dbres) => {
//       console.log("data updated in DB ", dbres);
//     })
//     .catch((error) => errorHandler);
// }, 2000);

// setTimeout(() => {
//   User.findByIdAndUpdate("6808d5f1a6f06073f8f143ef",{$set:{email:"ladayihogi@valtech.com"}}).then((dbres) => {
//     console.log("data updated in DB ", dbres);
//   }
//   ).catch((error) => errorHandler);
// }
// , 2000);

//delete
// setTimeout(() => {
//   User.findByIdAndDelete("6808d115536329dc42859582").then((dbres) => console.log("data deleted in DB ", dbres)).catch((error) => errorHandler);
// }
// , 2000);


//CRUD


//routes

app.listen(config.port, config.host, errorHandler);
