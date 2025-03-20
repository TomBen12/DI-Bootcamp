const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../models/postModel");

// get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get a post by id
const getPost = async (req, res) => {
  try {
    const post = await getPostById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// create a post
const addPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }
    const newPost = await createPost(title, content);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// update a post
const editPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedPost = await updatePost(req.params.id, title, content);
    if (!updatedPost) return res.status(404).json({ error: "Post not found" });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// delete post
const removePost = async (req, res) => {
  try {
    const deletedPost = await deletePost(req.params.id);
    if (!deletedPost) return res.status(404).json({ error: "Post not found" });
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getPosts, getPost, addPost, editPost, removePost };
