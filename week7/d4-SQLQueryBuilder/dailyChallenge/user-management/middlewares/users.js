import { doesUserExist } from "../utils/utils.js";

const checkUserNameAvailable = async (req, res, next) => {
  try {
    const { username } = req.body;
    const userExist = await doesUserExist(username);
    if (userExist)
      return res.status(409).json({ message: "Username already taken" });
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const checkIfUserExist = async (req, res, next) => {
  try {
    const { username } = req.body;
    const userExist = await doesUserExist(username);
    if (userExist) {
      next();
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { checkUserNameAvailable, checkIfUserExist };
