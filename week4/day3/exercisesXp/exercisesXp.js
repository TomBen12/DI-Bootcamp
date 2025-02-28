//Exercise 1
// function displayNumberVisible() {
//   let num = 0;
//   for (let i = 0; i < 500; i++) {
//     if (i % 23 == 0) {
//       console.log(i);
//       num += i;
//     }
//   }
//   console.log(num);
// }
// displayNumberVisible();

// function displayNumberVisible(divisor) {
//   let num = 0;
//   for (let i = 0; i < 500; i++) {
//     if (divisor != 0 && i % divisor == 0) {
//       console.log(i);
//       num += i;
//     }
//   }
//   console.log(num);
// }
// displayNumberVisible(50);

//Exercise 2

// const stock = {
//   banana: 6,
//   apple: 0,
//   pear: 12,
//   orange: 32,
//   blueberry: 1,
// };

// const prices = {
//   banana: 4,
//   apple: 2,
//   pear: 1,
//   orange: 1.5,
//   blueberry: 10,
// };

// let shoppingList = ["banana", "apple", "orange"];

// function myBill() {
//   let totalCost = 0;
//   for (let i = 0; i < shoppingList.length; i++) {
//     const fruit = shoppingList[i];
//     if (stock[fruit] > 0) {
//       stock[fruit] -= 1;
//       totalCost += prices[fruit];
//     }
//   }
//   return totalCost;
// }
// console.log(myBill());
// console.log(stock);

// Exercise 3

// function changeEnough(itemPrice, amountOfChange) {
//   const change = [0.25, 0.1, 0.05, 0.01];
//   let totalChange = 0;
//   for (let i = 0; i < amountOfChange.length; i++) {
//     let coins = amountOfChange[i];
//     totalChange += coins * change[i];
//   }
//   return totalChange >= itemPrice;
// }

// console.log(changeEnough(4.25, [25, 20, 5, 0]));

// Exercise 4

// function hotelCost() {
//   let nights;
//   do {
//     let input = prompt("How many nights will you stay?");
//     nights = parseInt(input);
//   } while (isNaN(nights));
//   return 140 * nights;
// }

// function planeRideCost() {
//   let destination;
//   do {
//     let input = prompt("Where would you like to fly to?");
//     destination = input;
//   } while (!destination || !isNaN(destination));
//   let pureDestination = destination.toLowerCase().trim();
//   if (pureDestination == "paris") {
//     return 220;
//   } else if (pureDestination == "london") {
//     return 183;
//   }
//   return 300;
// }

// function rentalCarCost() {
//   let days;
//   do {
//     let input = prompt("For how many days would you like to rent THE car");
//     days = parseInt(input);
//   } while (isNaN(days));
//   let dailyRate = 40;
//   let totalCost = days * dailyRate;
//   return days > 10 ? totalCost * 0.9 : totalCost;
// }

// function totalVacationCost() {
//   let hotelVCost = hotelCost();
//   let planeVCost = planeRideCost();
//   let carVCost = rentalCarCost();
//   alert(
//     `The car cost:${carVCost}, the hotel cost: ${hotelVCost}, the plane tickets cost: ${planeVCost}`
//   );
// }

// totalVacationCost();

// Exercise 5

const myDiv = document.getElementById("container");
console.log(myDiv);

document
  .getElementsByClassName("list")[0]
  .getElementsByTagName("li")[1].textContent = "Richard";

document
  .getElementsByClassName("list")[1]
  .getElementsByTagName("li")[1]
  .remove();

const myLists = document.getElementsByClassName("list");

for (const ul of myLists) {
  const firstLi = ul.getElementsByTagName("li")[0];
  firstLi.textContent = "Tom";
}

for (const ul of myLists) {
  ul.classList.add("student_list");
}

myLists[0].classList.add("university", "attendance");

myDiv.style.backgroundColor = "lightblue";
myDiv.style.padding = "0.5em";

document
  .getElementsByClassName("list")[1]
  .getElementsByTagName("li")[1].style.display = "none";

document
  .getElementsByClassName("list")[0]
  .getElementsByTagName("li")[1].style.border = "1px solid red";

document.body.style.fontSize = "25px";

let tom = document
  .getElementsByClassName("list")[0]
  .getElementsByTagName("li")[0].textContent;
let richard = document
  .getElementsByClassName("list")[0]
  .getElementsByTagName("li")[1].textContent;
myDiv.style.backgroundColor =
  "lightblue" && alert(`Hello ${tom} and ${richard}`);
