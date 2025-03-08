//exercise 1
// let numbers = [123, 8409, 100053, 333333333, 7];

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] % 3 == 0 ? console.log(true) : console.log(false);
// }

//exercise2

// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina",
// };

// let aName = prompt("write a name").trim().toLowerCase();

// aName in guestList
//   ? alert(`Hi! I'm ${aName}, and I'm from ${guestList[aName]}.`)
//   : alert("Hi! I'm a guest.");

//exercise 3

let age = [20, 5, 12, 43, 98, 55];
let sum = 0;

for (let i = 0; i < age.length; i++) {
  sum += age[i];
}

let oldest = age[0];
for (let i = 0; i < age.length; i++) {
  if (age[i] > oldest) {
    oldest = age[i];
  }
}
console.log("the sum of ages: ", sum);
console.log("the oldest is ", oldest);
