const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5001;
//port 5000 doesn't work for me and because taken by controlcenter...

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
  { id: 2, title: "1984", author: "George Orwell", publishedYear: 1949 },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
];

app.get("/api/books", (req, res) => {
  if (books.length === 0) {
    return res.status(404).json({ message: "books not found" });
  }
  res.status(200).json(books);
});

app.get("/api/books/:id", (req, res) => {
  const { id } = req.params;
  const book = books.find((item) => item.id == id);
  if (!id) {
    return res.status(404).json({ message: "book not found" });
  }
  res.status(200).json(book);
});

app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ error: "Field missing!" });
  }
  const newBook = {
    id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});
