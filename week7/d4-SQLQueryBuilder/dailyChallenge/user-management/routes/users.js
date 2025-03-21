import { Router } from "express";
import {
  login,
  register,
  getAllUsers,
  getUser,
  updateUserInfo,
} from "../controllers/users.js";
import {
  checkUserNameAvailable,
  checkIfUserExist,
} from "../middlewares/users.js";

const route = Router();

route.post("/register", checkUserNameAvailable, register);

route.post("/login", checkIfUserExist, login);

route.get("/users", getAllUsers);

route.get("/users/:id", getUser);

route.put("/users/:id", updateUserInfo);

export default route;
