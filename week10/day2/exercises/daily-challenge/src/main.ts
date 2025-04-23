/* Daily Challenge */

interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

interface BookDetails {
  title: string;
  author: string;
  genre?: string;
}

class Library {
  // private books: Book[];
  //changed it to protect so the extended class can access it in the listBooks method
  protected books: Book[];

  constructor(books: Book[] = []) {
    this.books = books;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  getBookDetails(isbn: string): BookDetails | undefined {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      const { title, author, genre } = book;
      return { title, author, genre };
    }
    return undefined;
  }
}

class DigitalLibrary extends Library {
  readonly website: string;
  constructor(website: string, books: Book[] = []) {
    super(books);
    this.website = website;
  }

  listBooks(): Book[] {
    return this.books;
  }
}

const digitalLib = new DigitalLibrary("www.digitalbooks.com");

digitalLib.addBook({
  title: "blalal",
  author: "asd",
  isbn: "123456789",
  publishedYear: 2008,
  genre: "code",
});

digitalLib.addBook({
  title: "bsbs",
  author: "someguy",
  isbn: "456789123",
  publishedYear: 1999,
  genre: "math",
});

const allBooks = digitalLib.listBooks();

for (const book of allBooks) {
  const details = digitalLib.getBookDetails(book.isbn);
  console.log(details);
}

const titles = allBooks.map((book) => book.title);

console.log(titles);
