// 1.Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

// 2.Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

// 3.Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

// 4.If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.

// For example, the result here should be : “The movie is good, I like it”
// 5.If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.

//1
let sentence = "This dinner is not that bad ! You cook well";
console.log(sentence);
//2

let wordNot = sentence.indexOf("not");
console.log(wordNot);
//3
let wordBad = sentence.indexOf("bad");
console.log(wordBad);
//4 //5
if (wordBad > wordNot) {
  sentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(sentence);
} else console.log(sentence);

///DAILY CHALLENGE 2
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the interne
let star = "";
for (let i = 1; i <= 6; i++) {
  star += " * ";
  console.log(star);
}

let rows = 6;
for (i = 1; i <= rows; i++) {
  let star = "";
  for (j = 1; j <= i; j++) {
    star += " * ";
  }
  console.log(star);
}
