const express = require("express");
const router = require("./routes/index.js");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || "3000";

app.use("/", router);

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});
