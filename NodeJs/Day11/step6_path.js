
const path = require("node:path");
 
let filepath = "C://temp////foo//bar//..//";
console.log(path.normalize(filepath));
 
let outerfolder = "heroes";
let foldername = "products";
let innerfolder = "games";
let childfolder = "dark knight";
let season = "season 1";
let filename = "poster.jpg";
 
// console.log("heroes\products\games\dark20%knight\season20%1\poster.jpg");
 
console.log(
  path.join(outerfolder, foldername, innerfolder, childfolder, season, filename)
);