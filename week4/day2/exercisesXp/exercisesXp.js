// Exercise 1 : List of people
// Instructions
const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays

//1
greg = people.shift();
console.log(people);

//2
james = people.splice(3, 1, "Jason");
console.log(people);
//3
myName = "Tom";
people.push(myName);
console.log(people);
//4
console.log(people.indexOf("Mary"));
//5
thesePeople = people.slice(1, -1);
console.log(thesePeople);
//6
people.indexOf("Foo");
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

//7
let last = people.slice(-1).join();
console.log(last);
//----
console.log(people.length);
console.log(people.indexOf("Tom"));
//index of last element = length -1

// Part II - Loops
// 1.Using a loop, iterate through the people array and console.log each person.

// 2.Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

//1
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

//2
for (let i = 0; i < people.length; i++) {
  if (people[i] == "Devon") {
    console.log(people[i]);
    break;
  } else {
    console.log(people[i]);
  }
}

// Exercise 2 : Your favorite colors
// Instructions
// 1.Create an array called colors where the value is a list of your five favorite colors.
// 2.Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// 3.Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

//1
let colors = ["red", "black", "white", "lime green", "hot pink", "turquoise"];

//2
for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}# choice is: ${colors[i]}`);
}

//3
let ordinalSuffixesTo6 = ["st", "nd", "rd", "th", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${ordinalSuffixesTo6[i]} choice is: ${colors[i]}`);
}

// Exercise 3 : Repeat the question
// Instructions
// 1.Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// 2.While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

//1 //2 // do while is more relevent
// do {
//   userInput = parseInt(prompt("Enter a number"));
//   console.log(typeof userInput);
// } while (userInput < 10);

//  Exercise 4 : Building Management
// Instructions:
//1
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

//2
console.log(building.numberOfFloors);
//3
console.log(
  building.numberOfAptByFloor.firstFloor,
  building.numberOfAptByFloor.secondFloor
);
//4
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);
//5
if (
  building.numberOfRoomsAndRent.sarah[1] +
    building.numberOfRoomsAndRent.david[1] >
  building.numberOfRoomsAndRent.dan[1]
) {
  building.numberOfRoomsAndRent.dan[1] += 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);

// Exercise 5 : Family
// Instructions
// 1.Create an object called family with a few key value pairs.
// 2.Using a for in loop, console.log the keys of the object.
// 3.Using a for in loop, console.log the values of the object.

//1//2//3
const family = {
  mom: "Laurence",
  dad: "David",
  olderBrother: "Jim",
  youngerSister: "Emma",
  youngerBrother: "Jonah",
  me: "Tom",
};

for (const key in family) {
  console.log(key, ":", family[key]);
}

// Exercise 6 : Rudolf
// Instructions
const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
let rudolf = "";
for (const key in details) {
  rudolf += key + " " + details[key] + " ";
}
console.log(rudolf);

// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// 1.A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// 2.Console.log the name of their secret society. The output should be “ABJKPS”
let secretSocietyLetterArray = [];
for (i = 0; i < names.length; i++) {
  secretSocietyLetterArray.push(names[i][0]);
}
secretSociety = secretSocietyLetterArray.sort().join("");
console.log(secretSociety);
