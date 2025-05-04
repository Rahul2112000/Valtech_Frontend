const fs=require('fs');
const path=require('path');

//create a directory
const dirPath=path.join(__dirname,'data');
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

//create a data.txt
const filePath=path.join(dirPath,'data.txt');
fs.writeFileSync(filePath,"Welcome to your life");

//read
const fileContent=fs.readFileSync(filePath,'utf-8');
console.log(fileContent);

//delete
fs.unlinkSync(filePath);

//delete folder data
fs.rmdirSync(dirPath);



//sir solution
const fs=require("node:fs");
const { console } = require('node:inspector/promises');

//fs.mkdirSync("data");
//fs.writeFile("data/data.txt");

//console.log(fs.readdirSync("data"));
// fs.access("data",(err)=>{
//     console.log(err?"Folder does not exist":"Folder exists");
// })

//console.log(__filename);
// console.log(__dirname);
