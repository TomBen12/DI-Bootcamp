const express = require("express");
const taskRouter = require("./routes/tasks");
require("dotenv").config();

const app = express();

const PORT = process.env.LOCALPORT;

app.use(express.json());

app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
