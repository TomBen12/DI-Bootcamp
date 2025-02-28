//Exercise 6
// document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation");

// const myLi = document.createElement("li");
// const txtNode = document.createTextNode("Logout");

// myLi.appendChild(txtNode);

// document.getElementsByTagName("ul")[0].appendChild(myLi);

// const elems = document.getElementsByTagName("ul")[0];

// const firstLast = [
//   elems.firstElementChild.textContent,
//   elems.lastElementChild.textContent,
// ];

// alert(firstLast);

//Exercise 7

const allBooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
    read: true,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Atomic_habits.jpg?20220408104922",
    read: false,
  },
];

for (i = 0; i < allBooks.length; i++) {
  const book = document.createElement("div");
  const titleAndAuthor = document.createElement("p");
  const bookcover = document.createElement("img");

  titleAndAuthor.innerText = `${allBooks[i].title} written by ${allBooks[i].author}`;

  bookcover.setAttribute("src", allBooks[i].image);
  bookcover.setAttribute("width", "100px");

  !allBooks[i].read && (titleAndAuthor.style.color = "red");
  document
    .querySelector(".listBooks")
    .appendChild(book)
    .appendChild(titleAndAuthor);
  book.appendChild(bookcover);
}
