const greet = require("./ex1/greeting.js");
const colors = require("./ex2/colorful-message.js");
const readF = require("./files/read-file.js");

greet.greeting("tom");
colors.displayColorful("HI");
readF.readReadFile(
  "/Users/tom/Documents/DI-Bootcamp/week7/d1-nodejsIntro/daily-challenge/files/file-data.txt"
);
