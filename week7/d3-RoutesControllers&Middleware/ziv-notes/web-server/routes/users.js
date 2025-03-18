const { Router } = require("express");
const {
  deleteUser,
  updateUser,
  createUser,
  getAllUsers,
  getOneUser,
  searchUserByName,
} = require("../controllers/users.js");

const { auth } = require("../middlewares/auth.js");

const router = Router();

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

router.post("/", createUser);

router.get("/", auth(), getAllUsers);

router.get("/:id",auth(), getOneUser);

router.get("/search", searchUserByName);

module.exports = router;
