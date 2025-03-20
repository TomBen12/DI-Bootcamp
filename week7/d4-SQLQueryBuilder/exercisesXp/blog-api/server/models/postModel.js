const db = require("../config/db.js");

// get posts
const getAllPosts = async () => {
  return await db("posts").select("id", "title", "content");
};

// get post by id
const getPostById = async (id) => {
  return await db("posts").where({ id }).first();
};

// create post
const createPost = async (title, content) => {
  const [newPost] = await db("posts")
    .insert({ title, content })
    .returning("id, title, content");
  return newPost;
};

// update post
const updatePost = async (id, title, content) => {
  const [updatedPost] = await db("posts")
    .where({ id })
    .update({ title, content })
    .returning("id, title, content");
  return updatedPost;
};

// dlete post
const deletePost = async (id) => {
  const [deletedPost] = await db("posts")
    .where({ id })
    .del()
    .returning("id, title, content");
  return deletedPost;
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
