import bcrypt from "bcrypt";
import { findUserByUsername } from "../models/users.js";

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

async function comparePasswords(plainPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}

const doesUserExist = async (username) => {
  const user = await findUserByUsername(username);
  return !!user;
};

export { hashPassword, comparePasswords, doesUserExist };
