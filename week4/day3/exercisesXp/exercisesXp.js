// 🌟 Exercise 1 : Find the numbers divisible by 23
// Instructions
// 1.Create a function call displayNumbersDivisible() that takes no parameter.

// 2.In the function, loop through numbers 0 to 500.

// 3.Console.log all the numbers divisible by 23.

// 4.At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345
// 368 391 414 437 460 483
// Sum : 5313

// 5.Bonus: Add a parameter divisor to the function.

// displayNumbersDivisible(divisor)

// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3,
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45,
// and their sum

//1 //2 //3 //4 //5
// function hotelCost() {
//   let nightNum;
//   do {
//     let input = prompt("How many nights will you stay?");
//     nightNum = parseInt(input);
//   } while (isNaN(nightNum) || nightNum <= 0);
//   return nightNum * 140;
// }

// function planeRideCost() {
//   let destination;
//   do {
//     destination = prompt("What will be your destination?");
//   } while (!destination);

//   destination = destination.toLowerCase();

//   if (destination === "paris") {
//     return 220;
//   } else if (destination === "london") {
//     return 183;
//   } else {
//     return 300;
//   }
// }

// function rentalCarCost() {
//   let rentalDays;
//   do {
//     let input = prompt("How many days would you like to rent a car?");
//     rentalDays = parseInt(input);
//   } while (isNaN(rentalDays) || rentalDays <= 0);

//   const dailyRate = 40;
//   const totalCost = rentalDays * dailyRate;

//   if (rentalDays >= 10) {
//     return totalCost * 0.9;
//   }
//   return totalCost;
// }

// function totalVacationCost() {
//   let hotel = hotelCost();
//   let flight = planeRideCost();
//   let car = rentalCarCost();
//   return `Total vacation cost: $${hotel + flight + car}`;
// }

// console.log(totalVacationCost());

// Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>

// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the second <li> of the second <ul>.
// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
// Change the font size of the whole body.

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

//2
let thatDiv = document.getElementById("container");
console.log(thatDiv);

let lists = document.querySelectorAll(".list li");
lists[1].innerText = "Richard";

let secondList = document.querySelectorAll(".list")[1];
secondList.removeChild(secondList.children[1]);

lists.forEach((li, index) => {
  if (index % 2 === 0) {
    li.innerText = "Tom";
  }
});
//3
document.querySelectorAll(".list ul").forEach((ul) => {
  ul.classList.add("student_list");
});

document.querySelector(".list").classList.add("university", "attendance");

//4
theDiv = document.querySelector("div");
theDiv.style.backgroundColor = "lightblue";
theDiv.style.padding = "2px";

///couldn't finnish....need i needed sleep...