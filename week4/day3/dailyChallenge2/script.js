let userWords = prompt("Enter a couple of words separated by commas").trim();
let userWordList = userWords.split(",").map((word) => word.trim());

let lenOfBig = 0;
for (let i = 0; i < userWordList.length; i++) {
  if (userWordList[i].length > lenOfBig) {
    lenOfBig = userWordList[i].length;
  }
}

console.log("*".repeat(lenOfBig + 4));

for (let i = 0; i < userWordList.length; i++) {
  console.log(`* ${userWordList[i].padEnd(lenOfBig)} *`);
}

console.log("*".repeat(lenOfBig + 4));
