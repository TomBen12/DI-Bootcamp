const {
  selectAllBooks,
  selectBook,
  insertBook,
} = require("../models/bookModel");

//get all book
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await selectAllBooks();
    res.status(200).json(allBooks);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

//get one book
const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await selectBook(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ error: err });
  }
};

//post book
const postBook = async (req, res) => {
  try {
    const { title, author, pages } = req.body;
    const book = await insertBook(title, author, pages);
    res.status(200).json(book);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

module.exports = { getAllBooks, getBook, postBook };
