const http = require("node:http");
const fs = require("node:fs");
let server = http.createServer(function (req, res) {
  // console.log(req.url);
  if (req.url === "/favicon.ico") {
    res.end();
  } else if (req.url === "/") {
    res.write(fs.readFileSync("public/index.html", "utf8"));
    res.end();
  } else {
    let url = req.url.replace("/", "");
    fs.readFile("public/" + url, function (error) {
      if (error) {
        res.write(fs.readFileSync("public/404.html", "utf-8"));
        res.end();
      } else {
        res.write(fs.readFileSync("public/" + url, "utf-8"));
        res.end();
      }
    });
  }
});
server.listen(3000, "localhost");
