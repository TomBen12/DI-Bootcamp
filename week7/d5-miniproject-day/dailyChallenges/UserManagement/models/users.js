import path from "path";
import {
  generateId,
  readJsonFile,
  appendToJsonFile,
  writeOnJsonFile,
} from "../utils/utils.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const USERSJSONPATH = path.join(__dirname, "../config/users.json");

const createUser = async (newUser) => {
  try {
    const users = await readJsonFile(USERSJSONPATH);
    const newid = generateId(users);
    const newUserWithId = { id: newid, ...newUser };
    await appendToJsonFile(USERSJSONPATH, newUserWithId);
    return newUserWithId;
  } catch (error) {
    console.error("error from createUser", error.message);
    throw error;
  }
};

const readAllUsers = async () => {
  try {
    return await readJsonFile(USERSJSONPATH);
  } catch (error) {
    console.error("error from readAllUsers", error.message);
    throw error;
  }
};

const readUserById = async (id) => {
  try {
    const users = await readAllUsers(USERSJSONPATH);
    const user = users.find((user) => user.id == id);
    if (!user) throw new Error("user not found");
    return user;
  } catch (error) {
    console.error("error from readUserById", error.message);
    throw error;
  }
};

const updateUserInfoByID = async (id, patchData) => {
  try {
    const users = await readAllUsers(USERSJSONPATH);
    const user = users.find((user) => user.id == id);
    if (!user) throw new Error("user not found");
    Object.assign(user, patchData);
    await writeOnJsonFile(USERSJSONPATH, users);
    return user;
  } catch (error) {
    console.error("error from updateUserInfoById", error.message);
    throw error;
  }
};

export { createUser, readAllUsers, readUserById, updateUserInfoByID };
