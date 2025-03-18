const { users } = require("../config/data.js");

const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id == id);

  users.splice(index, 1);
  res.json(users);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const index = users.findIndex((item) => item.id == id);

  if (index === -1) {
    res.status(404).json({ message: "user to update not found" });
    return;
  }

  users[index] = { ...users[index], name, email };

  res.json(users);
};

const createUser = (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;

  const newUser = { name, email, id: users.length + 1 };
  users.push(newUser);
  res.json(users);
};

const getAllUsers = (req, res) => {
  res.json(users);
};

const getOneUser = (req, res) => {
  console.log(req.params);
  const { id, name } = req.params;
  const user = users.find((item) => item.id == id);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
    // return res.sendStatus(401);
  }
  res.json(user);
};

const searchUserByName = (req, res) => {
  console.log(req.query);
  const { name } = req.query;

  const filterUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  if (filterUsers.length === 0) {
    res.status(404).json({ message: "no user match your search!!!" });
    return;
  }

  res.json(filterUsers);
};

module.exports = {
  deleteUser,
  updateUser,
  createUser,
  getAllUsers,
  getOneUser,
  searchUserByName,
};
