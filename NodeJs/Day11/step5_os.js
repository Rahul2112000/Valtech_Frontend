const { copyFileSync } = require("node:fs");
const os=require("node:os");
console.log(os.arch());


console.log(os.cpus().length);
console.log((os.totalmem()/1024)/102/1024," GB");
console.log((os.freemem()/1024)/102/1024," GB");
console.log(os.availableParallelism());

