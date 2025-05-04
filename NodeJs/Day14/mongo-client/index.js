const express = require("express");
let app = express();
app.use(express.static("public"));
app.listen(3000, "localhost", function (error) {
  if (error) {
    console.log("Error", error);
  } else {
    console.log("Express is live on localhost:3000");
  }
});