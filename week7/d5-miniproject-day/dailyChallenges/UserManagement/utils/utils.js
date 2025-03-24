import { readFile, writeFile } from "fs/promises";
import bcrypt from "bcrypt";

const generateId = (array) => {
  return array.length > 0 ? Math.max(...array.map((item) => item.id)) + 1 : 1;
};

// const sortById = (array) => {
//   return array.sort((a, b) => a.id - b.id);
// };

async function hashPassword(password) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error("error while hashing password", error.message);
    throw error;
  }
}

async function comparePasswords(plainPassword, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error("error while comparing password", error.message);
    throw error;
  }
}

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

export {
  generateId,
  hashPassword,
  comparePasswords,
  readJsonFile,
  appendToJsonFile,
  writeOnJsonFile,
};
