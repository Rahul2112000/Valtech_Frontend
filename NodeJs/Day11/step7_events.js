const Event = require("node:events").EventEmitter;
let myevent = new Event();
 
setTimeout(function () {
  myevent.emit("valtechEvent");
}, 2000);
 
myevent.addListener("valtechEvent", function () {
  console.log("Valtech Event Happened");
});