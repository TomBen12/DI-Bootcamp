function isBlank(str) {
  return str.trim().length === 0;
}

//exercise 2

function abbrevName(str) {
  let splitted = str.trim().split(" ");
  return splitted[0] + " " + splitted[1][0].toUpperCase() + ".";
}

//exercice 3
function caseSwap(str) {
  return str
    .split("")
    .map((letter) =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join("");
}

//exercise 4

let thatArray = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]];

function isOmnipresent(array, value) {
  return array.every((sub) => sub.includes(value));
}
