const fs = require("fs");

const readReadFile = (path) => {
  fs.readFile(path, "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
      return;
    }
    console.log(data);
  });
};

module.exports = { readReadFile };
