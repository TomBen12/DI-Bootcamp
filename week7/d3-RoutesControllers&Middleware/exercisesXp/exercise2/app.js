import express from "express";
import { toDoRoute } from "./routes/todos.js";

const app = express();

app.use(express.json());

app.use("/todos", toDoRoute);

const PORT = process.env.PORT || "3000";

app.listen(PORT, () => {
  console.log(`TodoList Server running on port ${PORT}`);
});
