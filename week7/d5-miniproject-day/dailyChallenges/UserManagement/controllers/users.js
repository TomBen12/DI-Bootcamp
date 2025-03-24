import {
  createUser,
  readAllUsers,
  readUserById,
  updateUserInfoByID,
} from "../models/users.js";
import { hashPassword, comparePasswords } from "../utils/utils.js";

const registerHandler = async (req, res) => {
  try {
    const newUser = req.validatedRegUser;
    const users = await readAllUsers();
    const userExists = users.find((user) => user.username === newUser.username);
    if (userExists) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashed = await hashPassword(newUser.password);
    newUser.password = hashed;
    const savedUser = await createUser(newUser);
    res.status(201).json({ message: "User created", newUser: savedUser });
  } catch (error) {
    console.error("error at registerHandler ", error.message);
    res.status(500).json({ message: "Failed to create user" });
  }
};

const loginHandler = async (req, res) => {
  try {
    const logUser = req.validatedLogUser;
    const users = await readAllUsers();
    const userExists = users.find((user) => user.username === logUser.username);
    if (!userExists) {
      return res.status(401).json({ message: "wrong username or password!" });
    }
    const passIsMatch = await comparePasswords(
      logUser.password,
      userExists.password
    );
    passIsMatch
      ? res
          .status(200)
          .json({ message: `Welcome back ${userExists.firstName}!` })
      : res.status(401).json({ message: "wrong username or password!" });
  } catch (error) {
    console.error("error at loginHandler ", error.message);
    res.status(500).json({ message: "failed during login" });
  }
};

const getAllUsersHandler = async (req, res) => {
  try {
    const users = await readAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("error at getAllUsersHandler ", error.message);
    res.status(500).json({ message: "failed to retrieve users" });
  }
};

const getUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await readUserById(Number(id));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("error at getUserHandler ", error.message);
    res.status(500).json({ message: "failed to retrieve user" });
  }
};

const updateUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const patchData = req.patchData;
    const patchedUser = await updateUserInfoByID(Number(id), patchData);
    res.status(200).json({ message: "User updated", user: patchedUser });
  } catch (error) {
    console.error("error at updateUserHandler:", error.message);
    res.status(500).json({ message: "Couldn't update user" });
  }
};

export {
  registerHandler,
  loginHandler,
  getAllUsersHandler,
  getUserHandler,
  updateUserHandler,
};
