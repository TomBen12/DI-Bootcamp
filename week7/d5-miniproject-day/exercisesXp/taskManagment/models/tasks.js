const {
  generateId,
  readJsonFile,
  writeOnJsonFile,
  appendToJsonFile,
} = require("../utils/utils");
const path = require("path");

//this is needed so the path stays relative to this file
const TASKSPATH = path.join(__dirname, "../config/tasks.json");

const getAllTasks = async () => {
  try {
    return await readJsonFile(TASKSPATH);
  } catch (error) {
    console.error("error from getAlltasks()", error.message);
    throw error;
  }
};

const getTaskById = async (id) => {
  try {
    const tasks = await readJsonFile(TASKSPATH);
    const task = tasks.find((task) => task.id == id);
    if (!task) throw new Error("task not found");
    return task;
  } catch (error) {
    console.error("error from getTaskById()", error.message);
    throw error;
  }
};

const addNewTask = async (newTask) => {
  try {
    const tasks = await readJsonFile(TASKSPATH);
    const newid = generateId(tasks);

    const newTaskWithId = { id: newid, ...newTask };
    await appendToJsonFile(TASKSPATH, newTaskWithId);
    return newTaskWithId;
  } catch (error) {
    console.error("error from addNewTask()", error.message);
    throw error;
  }
};

const updateTaskByID = async (id, patchData) => {
  try {
    const tasks = await readJsonFile(TASKSPATH);
    const task = tasks.find((task) => task.id == id);
    if (!task) throw new Error("task not found");
    Object.assign(task, patchData);
    await writeOnJsonFile(TASKSPATH, tasks);
    return task;
  } catch (error) {
    console.error("error from updateTask()", error.message);
    throw error;
  }
};

const removeTaskByID = async (id) => {
  try {
    const tasks = await readJsonFile(TASKSPATH);
    const taskIndex = tasks.findIndex((task) => task.id == id);
    if (taskIndex === -1) throw new Error("task not found");
    const [deletedTask] = tasks.splice(taskIndex, 1);
    await writeOnJsonFile(TASKSPATH, tasks);
    return deletedTask;
  } catch (error) {
    console.error("error from removeTask()", error.message);
    throw error;
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  addNewTask,
  updateTaskByID,
  removeTaskByID,
};
