const express = require("express");
const bodyParser = require("body-parser");
let app = express();
 
app.use(bodyParser.urlencoded({ extended: true }));
let heroes = ["Batman"];
app.get(
  "/",
  (req, res) =>
    // res.render("home.pug", { compname: "Valtech", headcount: 30 })
    //res.render("home.ejs", { compname: "Valtech", headcount: 30, heroes })
  res.render("home.pug", { compname: "Valtech", headcount: 30, heroes })
);
app.post("/", (req, res) => {
  heroes.push(req.body.message);
  console.log(heroes);
  res.redirect("/");
});
 
app.listen(3000, "localhost", function (error) {
  if (error) {
    console.log("Error ", error);
  } else {
    console.log("Express is now live on localhost:3000");
  }
});