const chalk = require("chalk");

const displayColorful = (message) => {
  console.log(chalk.red(message));
};

module.exports = { displayColorful };
