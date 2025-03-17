const express = require("express");

const app = express();
/**
 * body parser
 */
app.use(express.json());

console.log(__dirname);
app.use('/', express.static(__dirname + '/public'))

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

// app.get
// app.post
// app.put
// app.delete

const users = [
  { id: 1, name: "John", email: "jjj@gmail.com" },
  { id: 2, name: "Anne", email: "aaa@gmail.com" },
  { id: 3, name: "Marry", email: "mmm@gmail.com" },
];

/**
 * D - Delete - delete
 */
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((item) => item.id == id);

  users.splice(index, 1);
  res.json(users);
});

/**
 * U - Update - PUT
 */
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const index = users.findIndex((item) => item.id == id);

  if (index === -1) {
    res.status(404).json({ message: "user to update not found" });
    return;
  }

  users[index] = { ...users[index], name, email };

  res.json(users);
});

/**
 * C - Create - POST
 */
app.post("/api/users", (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;

  const newUser = { name, email, id: users.length + 1 };
  users.push(newUser);
  res.json(users);
});

/**
 * R - Read - GET
 */
app.get("/api/users", (req, res) => {
  res.json(users);
});

/**
 * R -Read - GET one user with params
 */
app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const { id, name } = req.params;
  const user = users.find((item) => item.id == id);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
    // return res.sendStatus(401);
  }
  res.json(user);
});

/**
 * R - Read - get user by name query
 */
app.get("/api/search", (req, res) => {
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
});

/**
 * API
 */

/**
 * CRUD
 *
 * Create - POST
 * Read - GET
 * Update - PUT
 * Delete - DELETE
 */

/**
 * REst/Restful API
 *
 * http://expamle.com/api/customers - Create - POST
 * http://expamle.com/api/customers - Read - GET
 *
 */
