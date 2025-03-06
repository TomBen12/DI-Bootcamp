//

// 1.

// const mergeWords = (word) => () => word;

// mergeWords("Hello")();

// 2.

// const mergeWords = (word) => (nextWord) =>
//   nextWord ? mergeWords(word + nextWord) : word;

//3.

// function mergeWords(string) {
//   return function (nextString) {
//     if (nextString === undefined) {
//       return string;
//     } else {
//       return mergeWords(string + " " + nextString);
//     }
//   };
// }

const mergeWords = (str) => (nextStr) =>
  !nextStr ? str : mergeWords(str + " " + nextStr);

mergeWords("first")("Second")();
