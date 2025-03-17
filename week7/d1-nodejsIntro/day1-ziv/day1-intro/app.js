/**
 * NodeJS Module System
 * 1. Mudule by ourselves
 * 2. Install mudeles from external libriries - NPM / YARN
 * 3. Core modules from NodeJS
 */

export const hello = (name) => {
  return `Hello, ${name}`;
};
export const greeting = (name) => {
  return `Welcome, ${name}, to nodejs class`;
};

const a = 10;
// console.log(a);

// module.exports = {
//   hello,
// };

export default greeting;
