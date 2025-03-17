// const { hello } = require("./app.js");
import { hello, greeting } from "./app.js";
import { myHello } from "./hello.cjs";
// import zivuch from './app.js'
// console.log(zivuch);
import axios from "axios";

// console.log(myHello());

const getUsers = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
getUsers()