const validateCreateTask = (req, res, next) => {
  const { title, completed } = req.body;
  if (!title || typeof title !== "string" || title.trim().length === 0) {
    return res
      .status(400)
      .json({ message: "title is required and must be a string." });
  }
  const validatedTask = {
    title: title.trim(),
    completed: typeof completed === "boolean" ? completed : false,
  };
  req.validatedTask = validatedTask;
  next();
};

const validateUpdateTask = (req, res, next) => {
  const { title, completed } = req.body;
  const patchData = {};
  if (title !== undefined) {
    if (typeof title !== "string" || title.trim().length === 0) {
      return res
        .status(400)
        .json({ message: "title must be a non-empty string." });
    }
    patchData.title = title.trim();
  }
  if (completed !== undefined) {
    if (typeof completed !== "boolean") {
      return res.status(400).json({ message: "completed must be a boolean." });
    }
    patchData.completed = completed;
  }
  if (Object.keys(patchData).length === 0) {
    return res
      .status(400)
      .json({ message: "No valid fields provided for update." });
  }
  req.patchData = patchData;
  next();
};

module.exports = { validateCreateTask, validateUpdateTask };
