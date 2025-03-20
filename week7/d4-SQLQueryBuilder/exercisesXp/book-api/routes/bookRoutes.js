const { Router } = require("express");
const {
  getAllBooks,
  getBook,
  postBook,
} = require("../controllers/bookController");

const route = Router();

route.get("/", getAllBooks);

route.get("/:id", getBook);

route.post("/", postBook);

module.exports = route;
