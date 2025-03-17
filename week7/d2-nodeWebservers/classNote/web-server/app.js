const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

const users = [
  { id: 1, name: "John", email: "jjj@gmail.com" },
  { id: 2, name: "anne", email: "kkk@gmail.com" },
  { id: 3, name: "marry", email: "lll@gmail.com" },
];

//create - POST

app.post("/api/users", (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;

  const newUser = { name, email, id: users.length + 1 };
  users.push(newUser);
  res.json(users);
});

//read GET
app.get("/api/users", (req, res) => {
  res.json(users);
});

// read one user with param
app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const user = users.find((item) => item.id == id);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  res.json(user);
});

app.get("/api/search", (req, res) => {
  console.log(req.query);
  const { name } = req.query;

  const filterUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filterUsers.length === 0) {
    res.status(404).json({ message: "no user match you search" });
    return;
  }
  res.json(filterUsers);
});

//update

app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const index = users.findIndex((item) => item.id == id);

  if (index == -1) {
    res.status(404).json({ message: "user to update not found" });
    return;
  }
  users[index] = { ...users[index], name, email };
  res.json(users);
});

//delete

app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id == id);
  if (users[index] == id ) {
    users[index]
  }
});
