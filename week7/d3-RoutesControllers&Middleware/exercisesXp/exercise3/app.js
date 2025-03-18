const express = require("express");
const bookRouter = require("./routes/books.js");

const app = express();

app.use(express.json());

app.use("/books", bookRouter);

const PORT = process.env.PORT || "3000";

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
