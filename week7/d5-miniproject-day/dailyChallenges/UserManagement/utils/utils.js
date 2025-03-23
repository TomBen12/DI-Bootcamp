const { readFile, writeFile } = require("fs/promises");

//create an id that can't be repeated even when an element is deleated.
const generateId = (array) => {
  return array.length > 0 ? Math.max(...array.map((item) => item.id)) + 1 : 1;
};

const sortById = (array) => {
  return array.sort((a, b) => a.id - b.id);
};

const readJsonFile = async (path) => {
  try {
    const data = await readFile(path, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("error from readJsonFile()", error.message);
    throw error;
  }
};

const writeOnJsonFile = async (path, jsonArray) => {
  try {
    await writeFile(path, JSON.stringify(jsonArray, null, 2));
  } catch (error) {
    console.error("error from writeOnJsonFile()", error.message);
    throw error;
  }
};

const appendToJsonFile = async (path, newObject) => {
  try {
    const jsonArray = await readJsonFile(path);
    jsonArray.push(newObject);
    await writeOnJsonFile(path, jsonArray);
  } catch (error) {
    console.error("error from appendToJsonFile()", error.message);
    throw error;
  }
};

module.exports = {
  readJsonFile,
  appendToJsonFile,
  writeOnJsonFile,
  generateId,
  sortById,
};
