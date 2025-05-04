const express = require("express");
const mongoose = require("mongoose");
const session = require("client-sessions");
const bcrypt = require("bcrypt");
// const csurf = require("csurf");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    cookieName: "valtech",
    secret:
      "e5tyukmngfdew34567u8ijnhbvcdswe45r6y7uikjnhbgvfdswe34567yuikmnbvcf",
    duration: 1000 * 60 * 30,
    activeDuration: 1000 * 60 * 10,
    cookie: {
      ephemeral: true,
    },
  })
);
// csrf must be added after the session middleware is configured
// and pass the sessionkey which is the name of the cookie
// app.use(csurf({ sessionKey: "valtech" })); // add csrf : cross site request forgery

// global middleware
app.use(function (req, res, next) {
  if (req.valtech && req.valtech.user) {
    User.findOne({ email: req.valtech.user.email })
      .then((dbres) => {
        // res.render("profile.pug", { userinfo : dbres } )
        req.valtech.user = req.registeredUser = dbres;
        // req.locals.user
        // console.log(req.registeredUser);
        next();
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  } else {
    next();
  }
});
// route middleware
let requireLogin = function (req, res, next) {
  if (!req.registeredUser) {
    res.redirect("/login");
  } else {
    next();
  }
};
// db config
let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;
let User = mongoose.model(
  "User",
  Schema({
    id: ObjectId,
    firstname: String,
    lastname: String,
    email: { type: String, unique: true },
    password: String,
  })
);

mongoose
  .connect("mongodb://127.0.0.1:27017/valtechDB")
  .then((res) => console.log("DB Connected"))
  .catch((err) => console.log("Error ", err));
//------------------------------------------
/*
    console.log(bcrypt.hashSync("v", bcrypt.genSaltSync(1)));
    console.log(bcrypt.hashSync("vi", bcrypt.genSaltSync(2)));
    console.log(bcrypt.hashSync("vij", bcrypt.genSaltSync(3)));
*/
//------------------------------------------
app.get("/", (req, res) => {
  res.render("home.pug");
});
app.get("/login", (req, res) => {
  res.render("login.pug");
});
app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((dbres) => {
      if (bcrypt.compareSync(req.body.password, dbres.password)) {
        // res.render("profile.pug", { userinfo : dbres })
        req.valtech.user = dbres;
        res.redirect("/profile");
      } else {
        res.render("login.pug", { error: "invalid email id or password" });
      }
    })
    .catch((err) => {
      res.render("login.pug", { error: "no user by that credentials" });
    });
});
app.get("/register", (req, res) => {
  res.render("register.pug");
});
app.post("/register", (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  let user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hash,
  });
  user
    .save()
    .then((dbres) => {
      console.log(dbres);
      res.render("register.pug", { message: " user registered" });
    })
    .catch((error) => {
      if (error.code == 11000) {
        res.render("register.pug", { errormessage: "email already exists" });
      } else {
        res.render("register.pug", {
          errormessage: "something went wrong please try again",
        });
      }
    });
});
app.get("/profile", requireLogin, (req, res) => {
  res.render("profile.pug", { userinfo: req.registeredUser });
});
app.get("/dashboard", requireLogin, (req, res) => {
  res.render("dashboard.pug", { userinfo: req.registeredUser });
});
app.get("/logout", (req, res) => {
  req.valtech.reset();
  res.redirect("/");
});
app.get("*auth", (req, res) => {
  res.render("home.pug");
});
app.listen(3030, "localhost", function (err) {
  if (err) {
    console.log("Error ", err);
  } else {
    console.log(`server is now live on "localhost":3030`);
  }
});