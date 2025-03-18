const { Router } = require("express");
const {
  getAllBooks,
  addNewBooks,
  updateBook,
  deleteBook,
} = require("../controllers/books.js");

const router = Router();

router.get("/", getAllBooks);

router.post("/", addNewBooks);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports =  router 
