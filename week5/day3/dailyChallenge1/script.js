const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];
//1
const usernames = [];
gameInfo.forEach((user) => usernames.push(user.username + "!"));

//2
const winners = [];
gameInfo.forEach((user) => user.score > 5 && winners.push(user.username));

//3
const totalScore = gameInfo.reduce((prev, cur) => prev + cur.score, 0);

