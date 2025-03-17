const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

const posts = [
  { id: 1, title: "some title", content: "content one" },
  { id: 2, title: "another title", content: "content two" },
  { id: 3, title: "third title", content: "content three" },
];

//Get Read all

app.get("/api/posts", (req, res) => {
  if (posts.length === 0) {
    return res.status(404).json({ message: "No posts found" });
  }
  res.json(posts);
});

//Get Read one

app.get("/api/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((item) => item.id == id);
  if (!id) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.json(post);
});

//POST Create

app.post("/api/posts/", (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.json(posts);
});

//PUT uptdade

app.put("/api/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const index = posts.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "Post not found" });
  }
  posts[index] = { ...posts[index], title, content };
  res.json(posts);
});

//Delete

app.delete("/api/posts/:id", (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((item) => item.id == id);
  posts.splice(index, 1);
  res.json(posts);
});
