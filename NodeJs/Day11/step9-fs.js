// const fs=require("node:fs");
// fs.writeFileSync("temp.txt","Hello World");
const fs = require("node:fs");
fs.writeFile("temp.txt", "Hello World", function (err) {
  console.log("File Created");
});

// fs.readFile("temp.txt", (err, res) => {
//   if (err) {
//     console.log("Error Happend ", err);
//   } else {
//     console.log("res");
//   }
// });
//append the text Jaipur to the existing text
fs.appendFile("temp.txt", "Jaipur", function (err) {
  console.log("File Created");
});
//add the text Jaipur before the existing text

