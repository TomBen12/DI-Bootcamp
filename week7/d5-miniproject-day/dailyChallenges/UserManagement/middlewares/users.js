const validateRegisterUser = (req, res, next) => {
  const { username, password, email, firstName, lastName } = req.body;
  if (!username || typeof username !== "string" || username.trim() === "") {
    return res.status(400).json({ message: "username required" });
  }
  if (!password || typeof password !== "string") {
    return res.status(400).json({ message: "password required" });
  }
  const validatedUser = {
    username: username.trim(),
    password: password.trim(),
    email: email?.trim() || "",
    firstName: firstName?.trim() || "",
    lastName: lastName?.trim() || "",
  };
  req.validatedRegUser = validatedUser;
  next();
};

const validateLoginUser = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || typeof username !== "string") {
    return res.status(400).json({ message: "Username is required" });
  }
  if (!password || typeof password !== "string") {
    return res.status(400).json({ message: "Password is required" });
  }
  req.validatedLogUser = {
    username: username.trim(),
    password: password.trim(),
  };
  next();
};

const validateUpdateUser = (req, res, next) => {
  const { email, firstName, lastName } = req.body;
  const patchData = {};
  if (typeof email === "string" && email.trim() !== "") {
    patchData.email = email.trim();
  }
  if (typeof firstName === "string" && firstName.trim() !== "") {
    patchData.firstName = firstName.trim();
  }
  if (typeof lastName === "string" && lastName.trim() !== "") {
    patchData.lastName = lastName.trim();
  }
  if (Object.keys(patchData).length === 0) {
    return res
      .status(400)
      .json({ message: "No valid fields provided for update" });
  }
  req.patchData = patchData;
  next();
};

export { validateRegisterUser, validateLoginUser, validateUpdateUser };
