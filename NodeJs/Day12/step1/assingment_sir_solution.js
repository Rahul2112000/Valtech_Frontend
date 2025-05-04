const fs = require("node:fs");
// fs.mkdirSync("data");
// fs.writeFile("data/data.txt");
// console.log(fs.readdirSync("data"));
/* 
fs.access("data", function (error) {
  console.log(error ? "folder is missing " : "data folder exists");
}); 
*/
// console.log(__dirname);
// console.log(__filename);
 
console.log(__dirname, process.cwd());
console.log("*************************");
process.chdir("data");
console.log(__dirname, process.cwd());
fs.writeFile("data.txt", "welcome to your life", function (error) {
  if (error) {
    console.log("Error ", error);
  } else {
    console.log("file created");
  }
});
process.chdir("../");
console.log("*************************");
console.log(process.cwd());
/* */
fs.unlink("data/data.txt", function (error) {
  if (error) {
    console.log("Error", error, " File missing");
  } else {
    console.log("data file is removed");
  }
}); 
 
 