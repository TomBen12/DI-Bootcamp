const { Router } = require("express");
const router = Router();
const {
  validateCreateTask,
  validateUpdateTask,
} = require("../middlewares/tasks");

const {
  getAllTasksHandler,
  getTaskHandler,
  createTaskHandler,
  updateTaskHandler,
  deleteTaskHandler,
} = require("../controllers/tasks");

// GET /tasks: Retrieve a list of all tasks from a JSON file.
router.get("/", getAllTasksHandler);
// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
router.get("/:id", getTaskHandler);
// POST /tasks: Create a new task and store it in the JSON file.
router.post("/", validateCreateTask, createTaskHandler);
// PUT /tasks/:id: Update a task by ID in the JSON file.
router.put("/:id", validateUpdateTask, updateTaskHandler);
// DELETE /tasks/:id: Delete a task by ID from the JSON file.
router.delete("/:id", deleteTaskHandler);

module.exports = router;
