const express = require("express");
const config = require("config");
let app = express();
 //let port = process.env.PORT || config.port;
 //console.log(process.env.PORT);
//console.log(app.get("env"));
/* 
to set the environment variable
on mac use :    export PORT=portnumber
 to delete port use :  unset PORT
on windows
$env:NODE_ENV='production' // works for me
set PORT=2020 // on some machines
*/
 console.log(config.get("apptitle"));


app.listen(3000, "localhost", function (error) {
  if (error) {
    console.log("Error ", error);
  } else {
    console.log("port and host live on 3000");
  }
});