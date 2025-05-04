const axios = require("axios");
const fs = require("node:fs");
module.exports = {
  getThatFile: function (url, file) {
    axios.get(url).then((webres) => {
      fs.writeFile(file, webres.data, "utf-8", function (error) {
        if (error) {
          console.log("Error ", error);
        } else {
          console.log("File ready");
        }
      });
    });
  },
};