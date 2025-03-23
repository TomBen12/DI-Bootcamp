const {
  getAllTasks,
  getTaskById,
  addNewTask,
  updateTaskByID,
  removeTaskByID,
} = require("../models/tasks");

// route.get("/");
const getAllTasksHandler = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error in getAllTasksHandler()", error.message);
    res.status(500).json({ message: "Failed to retrieve tasks" });
  }
};
// route.get("/:id");
const getTaskHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await getTaskById(Number(id));
    res.status(200).json(task);
  } catch (error) {
    console.error("Error in getTaskHandler()", error.message);
    res.status(500).json({ message: "Failed to retreve task" });
  }
};
// route.post("/");
const createTaskHandler = async (req, res) => {
  try {
    const newTask = req.validatedTask;
    const savedTask = await addNewTask(newTask);
    res.status(201).json(savedTask);
  } catch (error) {
    console.error("Error in createTaskHandler():", error.message);
    res.status(500).json({ message: "Failed to create task" });
  }
};
// route.put("/:id");
const updateTaskHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const patchData = req.patchData;
    const updatedTask = await updateTaskByID(Number(id), patchData);
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error in updateTaskHandler():", error.message);
    res.status(500).json({ message: "Failed to update task" });
  }
};
// route.delete("/:id");
const deleteTaskHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const removedTask = await removeTaskByID(Number(id));
    res.status(200).json(removedTask);
  } catch (error) {
    console.error("Error in deleteTaskHandler()", error.message);
    res.status(500).json({ message: "Failed to delete task" });
  }
};

module.exports = {
  getAllTasksHandler,
  getTaskHandler,
  createTaskHandler,
  updateTaskHandler,
  deleteTaskHandler,
};
