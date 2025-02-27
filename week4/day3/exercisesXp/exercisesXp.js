
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