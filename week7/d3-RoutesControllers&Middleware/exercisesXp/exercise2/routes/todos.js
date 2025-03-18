import { Router } from "express";
import {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/todos.js";

const route = Router();

route.get("/", getAllItems);

route.post("/", createItem);

route.put("/:id", updateItem);

route.delete("/:id", deleteItem);

export { route as toDoRoute };
