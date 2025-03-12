function makeAllCaps(wordArray) {
  return new Promise((resolve, reject) => {
    const isEveryString = wordArray.every(
      (element) => typeof element === "string"
    );
    isEveryString
      ? resolve(wordArray.map((element) => element.toUpperCase()))
      : reject("At least one element is not a string");
  });
}

function sortWords(wordArray) {
  return new Promise((resolve, reject) => {
    wordArray.length > 4
      ? resolve(wordArray.sort())
      : reject("Array must be longer than 4 elements");
  });
}

makeAllCaps([1, "pear", "banana"])
  .then((result) => sortWords(result))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
  .then((result) => sortWords(result))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((result) => sortWords(result))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//daily challenge 2

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs(morseJSON) {
  const morseObject = JSON.parse(morseJSON);
  return new Promise((resolve, reject) => {
    Object.keys(morseObject).length === 0
      ? reject("Empty Object!")
      : resolve(morseObject);
  });
}

function toMorse(morseJsObject) {
  return new Promise((resolve, reject) => {
    let userInput = prompt("Enter a word or a sentence: ").toLowerCase();
    const morseTranslation = [...userInput].map((char) => {
      if (char in morseJsObject) {
        return morseJsObject[char];
      } else {
        reject(`Char ${char} not in the Morse object.`);
      }
    });
    resolve(morseTranslation);
  });
}

function joinWords(morseTranslation) {
  const container = document.querySelector(".morse-container");
  const morsePElem = document.createElement("p");
  morsePElem.innerHTML = morseTranslation.join("<br>");
  container.appendChild(morsePElem);
}

toJs(morse)
  .then(toMorse)
  .then(joinWords)
  .catch((error) => console.log(error));
