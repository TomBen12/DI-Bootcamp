import chalk from "chalk";

export const dispalyColorMessage = (msg) => {
  return chalk.bold.blue(msg);
};

export const dispalyErrorMessage = (msg) => {
  return chalk.bold.red(msg);
};
