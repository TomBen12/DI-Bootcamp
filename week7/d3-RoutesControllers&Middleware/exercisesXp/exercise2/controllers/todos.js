import { toDos } from "../config/todoData.js";
import { generateAutoIncrementId } from "../utils/utils.js";

const getAllItems = (req, res) => {
  res.json(toDos);
};

const createItem = (req, res) => {
  const { title, completed } = req.body;
  const newItem = { id: generateAutoIncrementId(toDos), title, completed };
  toDos.push(newItem);

  res.json(toDos[toDos.length - 1]);
};

const updateItem = (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const index = toDos.findIndex((item) => item.id == id);
  if (index === -1) {
    res.status(404).json({ message: "can't update, item not found" });
  }
  toDos[index] = { ...toDos[index], title, completed };
  res.json(toDos[index]);
};

const deleteItem = (req, res) => {
  const { id } = req.params;
  const index = toDos.findIndex((item) => item.id == id);
  if (index === -1) {
    res.status(404).json({ message: "can't delete, item not found" });
    return;
  }
  const deletedItem = toDos.splice(index, 1)[0];
  res.json(deletedItem);
};

export { getAllItems, createItem, updateItem, deleteItem };
