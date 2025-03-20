const db = require("../config/db");

//get books
const selectAllBooks = async () => {
  return await db("books").select("id", "title", "author", "pages");
};

//get a book
const selectBook = async (id) => {
  return await db("books")
    .select("id", "title", "author", "pages")
    .where({ id })
    .first();
};

//add new book
const insertBook = async (title, author, pages) => {
  const [newBook] = await db("books").insert({ title, author, pages }, [
    "id",
    "title",
    "pages",
  ]);
  return newBook;
};

module.exports = { selectAllBooks, selectBook, insertBook };
