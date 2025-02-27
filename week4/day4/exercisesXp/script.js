//Exercise 1
// //1
const h1 = document.getElementsByTagName("h1");
console.log(h1);
//2
document.getElementsByTagName("p")[3].remove();
//3
const h2 = document.getElementsByTagName("h2")[0];
h2.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(e) {
  //   console.log(e);
  e.target.style.backgroundColor = "red";
}
// //4
const h3 = document.getElementsByTagName("h3")[0];
h3.addEventListener("click", changeDisplayNone);

function changeDisplayNone(e) {
  e.target.style.display = "none";
}
// //5
// myButton = document.createElement("button");
// myButton.innerText = "Click me";
// pS = document.getElementsByTagName("p");

// myButton.addEventListener("click", turnPBold);

// document.body.appendChild(myButton);

// function turnPBold() {
//   for (let i = 0; i < pS.length; i++) {
//     pS[i].style.fontWeight = "bold";
//   }
// }

// //6 taking the same h1 from 1.
// h1[0].addEventListener("mouseover", randomizeFontSize);

function randomizeFontSize(e) {
  e.target.style.fontSize = `${Math.floor(Math.random() * 100)}px`;
}

//Exercise 2
// 1
let myForm = document.querySelector("form");
console.log(myForm);
//2

let fNameInputElemById = myForm.querySelector("#fname");
let lNameInputElemById = myForm.querySelector("#lname");
let subButtonElemById = myForm.querySelector("#submit");

console.log(fNameInputElemById, lNameInputElemById, subButtonElemById);

//3
let fnameByName = myForm.querySelector("[name='firstname']");

let lnameByName = myForm.querySelector("[name='lastname']");

console.log(fnameByName, lnameByName);

//4

myForm.addEventListener("submit", getValues);

function getValues(e) {
  e.preventDefault();
  let firstName = fnameByName.value.trim();
  let lastName = lnameByName.value.trim();
  if (!firstName || !lastName) {
    alert("First or Last name can't be empty!");
    return;
  }
  let myUl = document.querySelector(".usersAnswer");
  let inputTexts = [firstName, lastName];
  inputTexts.forEach((element) => {
    let liElement = document.createElement("li");
    liElement.innerText = element;
    myUl.appendChild(liElement);
  });
}
//Exercise 3
let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll("strong");
}
function highlight(e) {
  e.target.style.color = "blue";
}
function returnItemsToDefault(e) {
  e.target.style.removeProperty("color");
}

getBoldItems();
allBoldItems.forEach((element) => {
  element.addEventListener("mouseover", highlight);
  element.addEventListener("mouseout", returnItemsToDefault);
});
