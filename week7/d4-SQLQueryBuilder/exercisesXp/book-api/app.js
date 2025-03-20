const express = require("express");
const bookRoute = require("./routes/bookRoutes");

const app = express();

app.use(express.json());

app.use("/api/books", bookRoute);

const PORT = 3000;

app.listen(3000, () => {
  console.log("server runs on port" + PORT);
});
