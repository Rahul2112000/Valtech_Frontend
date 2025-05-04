const fs = require("node:fs");
/* 
fs.writeFile("temp.txt", "Welcome to your life", function (error) {
  console.log("file is ready");
}); 
*/
/* fs.readFile("temp.txt", "utf-8", function (err, res) {
  if (err) {
    console.log("Error Happened ", err);
  } else {
    console.log(res);
  }
}); */
/* 
add the text ~:Ahamedabad:~ before the existing text
 
add the text ~:Ahamedabad:~ after the existing text
*/
let existingContent = null;
fs.readFile("temp.txt", "utf-8", function (err, data) {
  if (error) {
    console.log("Error ", error);
  } else {
    existingContent = data;
  }
});
let updateContent = "Ahamedabad " + existingContent;
fs.writeFile(
  "temp.txt",
  updateContent,
  { encoding: "utf-8" },
  function (error) {
    if (error) {
      console.log("Error is ", error);
    } else {
      console.log("file ready");
    }
  }
);
 
 
 
/* 
 
create a directory called data 
create a file called data.txt in data directory
add text "welcome to your life";
display the text in log;
delete the file data.txt
delete the folder data
 
*/