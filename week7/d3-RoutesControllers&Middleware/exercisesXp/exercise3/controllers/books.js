const { json } = require("express");
const books = require("../config/data.js");
const idgenerator = require("../utils/utils.js");
const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

const addNewBooks = (req, res) => {
  const { title, author, pages } = req.body;
  const newBook = { id: idgenerator(), title, author, pages };
  books.push(newBook);
  res.status(200).json(newBook);
};

const updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, pages } = req.body;
  const index = books.findIndex((item) => item.id == id);
  if (index === -1) {
    res.status(404).json({ message: `no books have id of ${id}` });
  }
  books[index] = { ...books[index], title, author, pages };
  res.status(200).json(books[index]);
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((item) => item.id == id);
  if (index === -1) {
    res.status(404).json({ message: `nothing is at id: ${id}` });
  }
  const deletedBook = books.splice(index, 1);
  res.status(200).json(deletedBook);
};

module.exports = { getAllBooks, addNewBooks, updateBook, deleteBook };
