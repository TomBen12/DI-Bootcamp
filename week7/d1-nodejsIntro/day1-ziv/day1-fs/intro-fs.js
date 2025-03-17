const fs = require("fs");

// try {
//   const data = fs.readFileSync("users", "utf-8");
//   console.log(JSON.parse(data));
// } catch (error) {
//   console.log(error);
// }
// console.log("before");
// fs.readFile("users", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });
// console.log("after");

const users = [
  { id: 1, name: "aaa" },
  { id: 2, name: "bbb" },
  { id: 3, name: "ccc" },
];

fs.writeFile("data.json", JSON.stringify(users), "utf-8", (err) => {
  if (err) console.log(err);
});

// fs.appendFile
// fs.copyFile
// fs.promises
