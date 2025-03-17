//exercise 3
const fs = require("fs");

const readFile = (filePath) => {
  fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) {
      console.log(error.message);
      return;
    }
    console.log(data);
  });
};

const writeFile = (filePath, data) => {
  fs.writeFile(filePath, data, "utf-8", (error) => {
    if (error) {
      console.log(error.message);
      return;
    }
  });
};

module.exports = {
  readFile,
  writeFile,
};
