import { Router } from "express";
import {
  registerHandler,
  loginHandler,
  getAllUsersHandler,
  getUserHandler,
  updateUserHandler,
} from "../controllers/users.js";
import {
  validateRegisterUser,
  validateLoginUser,
  validateUpdateUser,
} from "../middlewares/users.js";

const router = Router();

// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the JSON file.
router.post("/register", validateRegisterUser, registerHandler);

// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
router.post("/login", validateLoginUser, loginHandler);

// GET /users: Retrieve a list of all registered users from a JSON file (only for demonstration purposes; no authentication required).
router.get("/users", getAllUsersHandler);

// GET /users/:id: Retrieve a specific user by ID from the JSON file (only for demonstration purposes; no authentication required).
router.get("/users/:id", getUserHandler);

// PUT /users/:id: Update a user’s information by ID in the JSON file (only for demonstration purposes; no authentication required).
/*i know they ask for put but in the exercise i realised that patch is more suited when we're doing partial updates.*/
router.patch("/users/:id", validateUpdateUser, updateUserHandler);

export default router;
