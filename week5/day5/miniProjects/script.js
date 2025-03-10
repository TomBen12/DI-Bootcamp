const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

const botSearchForm = document.getElementById("bot-search");
const searchBox = document.getElementById("search");
const mainContainer = document.getElementsByTagName("main")[0];

const myCardsContainer = document.createElement("div");
myCardsContainer.id = "robot-card-container";
mainContainer.appendChild(myCardsContainer);

for (let i = 0; i < robots.length; i++) {
  const robotCard = document.createElement("div");
  robotCard.classList = "robot-card";
  robotCard.id = robots[i].id;
  const image = document.createElement("img");
  image.src = robots[i].image;
  image.classList = "robot-picture";
  const info = document.createElement("div");
  info.classList = "robot-info";
  const name = document.createElement("p");
  const username = document.createElement("p");
  const email = document.createElement("p");
  name.textContent = robots[i].name;
  username.textContent = robots[i].username;
  email.textContent = robots[i].email;
  info.append(name, username, email);
  robotCard.append(image, info);
  myCardsContainer.appendChild(robotCard);
}

botSearchForm.addEventListener("submit", (e) => e.preventDefault());

searchBox.addEventListener("input", (e) => {
  const search = e.target.value.toLowerCase();
  const cards = document.getElementsByClassName("robot-card");

  for (let i = 0; i < cards.length; i++) {
    const robotName = cards[i]
      .querySelector(".robot-info p")
      .textContent.toLowerCase();

    if (robotName.includes(search)) {
      cards[i].style.display = "flex";
    } else {
      cards[i].style.display = "none";
    }
  }
});
