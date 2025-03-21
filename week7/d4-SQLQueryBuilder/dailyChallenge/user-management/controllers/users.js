import { hashPassword, comparePasswords } from "../utils/utils.js";
import db from "../config/db.js";
import {
  insertToUsers,
  insertToPasswords,
  findHashPassByUserName,
  retrieveAllUsers,
  retrieveUserById,
  updateUserByID,
} from "../models/users.js";
// Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the the database
const register = async (req, res) => {
  const trx = await db.transaction();
  try {
    const { username, password } = req.body;
    if (!password) throw new Error("password missing");
    const bcryptedPass = await hashPassword(password);
    await insertToUsers(username, trx);
    await insertToPasswords(username, bcryptedPass, trx);
    await trx.commit();
    res.status(201).json({ message: "registered!" });
  } catch (error) {
    await trx.rollback();
    res.status(400).json({ message: error.message });
  }
};
//Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error("Username and password are required");
    }
    const hashPassword = await findHashPassByUserName(username);
    if (!hashPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = await comparePasswords(password, hashPassword);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: `Welcome back, ${username}` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Retrieve a list of all registered users from the database
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await retrieveAllUsers();
    if (allUsers.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Retrieve a specific user by ID from the database
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await retrieveUserById(id);
    if (!user) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Update a user’s information by ID in the database
const updateUserInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, firstName, lastName } = req.body;

    const fieldsToUpdate = {};
    if (email) fieldsToUpdate.email = email;
    if (firstName) fieldsToUpdate.first_name = firstName;
    if (lastName) fieldsToUpdate.last_name = lastName;
    if (Object.keys(fieldsToUpdate).length === 0) {
      return res.status(400).json({ message: "No fields provided to update." });
    }
    const updatedUser = await updateUserByID(id, fieldsToUpdate);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Failed to update user" });
  }
};

export { login, register, getAllUsers, getUser, updateUserInfo };
