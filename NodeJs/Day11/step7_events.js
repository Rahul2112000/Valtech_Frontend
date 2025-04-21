const Event = require("node:events").EventEmitter;
let myevent = new Event();
 
// setTimeout(function () {
//   myevent.emit("valtechEvent");
// }, 2000);
 
myevent.addListener("valtechEvent", function () {
  console.log("Valtech Event Happened");
});

//dispatch an event once every 4 seconds and 5 times only
let count = 0;
let interval=setInterval(function(){
  myevent.emit("valtechEvent");
  
  count++;
  if(count==5){
    clearInterval(interval);
  }
},4000)