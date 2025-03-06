//Exercice 1
// the form values will be submitted in the url

//Exercise 2
// the request will be sent in the body of the post request (Payload)

//Exercise 3
const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

//1. 2. everything got converted to json format
const marioGameJson = JSON.stringify(marioGame, null, 2);
console.log(marioGameJson);
