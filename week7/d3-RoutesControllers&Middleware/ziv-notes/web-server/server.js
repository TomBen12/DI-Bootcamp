const express = require("express");
const usersRouter = require("./routes/users.js");
const prouter = require("./routes/products.js");
const { auth } = require("./middlewares/auth.js");
const app = express();

app.use(express.json());

const test = () => (req, res, next) => {
  console.log("hello from test middleware");
  next();
};

app.use("/api/products", test());

// app.use( auth());

// console.log(__dirname);
app.use("/", express.static(__dirname + "/public"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

app.use("/api/users", usersRouter);
app.use("/api/products", prouter);

/**
 *  server
 *    |_ config - connection to databases
 *    |_ models - queries to database/files
 *    |_ controllers - function implements code - request, response
 *    |_ routes - route for api
 *    |_ middlewares - function - req, res - auth, log
 */
