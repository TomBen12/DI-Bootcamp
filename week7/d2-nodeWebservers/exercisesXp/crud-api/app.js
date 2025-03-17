import axios from "axios";
import express from "express";
import { fetchPosts } from "./data/dataService.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running. listening on port ${PORT}`);
});

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts(
      "https://jsonplaceholder.typicode.com/posts"
    );
    res.json(posts);
    console.log(
      "data has been successfully retrieved and sent as a response",
      posts
    );
  } catch (error) {
    console.error(error.message);
  }
});
