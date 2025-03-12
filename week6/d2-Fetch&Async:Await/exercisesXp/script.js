//Exercse 1

const fetchGif = async (endpoint) => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("something went wrong!");
  } else {
    let data = await response.json();
    console.log("JsObject", data);
  }
};
fetchGif(
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
).catch((err) => console.log("Error", err));

//Exercise 2

// fetchGif(
//   "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
// ).catch((err) => console.log("Error", err));

// Exercise 3
// const getStarShip = async () => {
//   const response = await fetch("https://www.swapi.tech/api/starships/9/");
//   if (response.ok) {
//     let objectStarWars = await response.json();
//     console.log(objectStarWars.result);
//   } else {
//     throw new Error("something went wrong!");
//   }
// };

// getStarShip();

//Exercise 4
// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   let result = await resolveAfter2Seconds();
//   console.log(result);
// }

// asyncCall();

//asyncCall() ---> loggin "calling to console" then resolveAferr2Seconds() ----> new promise created and resolved after 2 sec resuming our asyncCall function , the resolve value get assigned to result and then printed to the console.
