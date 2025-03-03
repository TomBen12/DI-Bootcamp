//Exercise1
//a will have a value of 3

//1.2
//error const can't be reassigned!

//2
// 2.1
//a will hve the value of 0 then 5
// 2.2
//error because we try to reassign a in functionTwo

//3

//function 4 assign "hello" to the window object (global scope) and the functionFive uses this as value for a

//4
//a gets redifined as "test" inside the function and if we use const we will get an error.

//5
// in block a=5 ouside a=2

//Exercise 2
//1
// const winBattle = () => true;
//2
// let experiencePoint;

// winBattle() ? (experiencePoint = 10) : (experiencePoint = 1);

// console.log(experiencePoint)

//exercise 3

// const isStr = (x) => (typeof x == "string") ? true : false;
//simplified verion -- const isStr = (x) => typeof x === "string";

//exercise 4

// const theSum = (x, y) => x + y;

//exercise 5
// 1
// function kgToG(kg) {
//   return kg * 1000;
// }

// console.log(kgToG(2));
//2

// const kgToGram = function (kg) {
//   return kg * 1000;
// };

// kgToGram(3);

//3
// function declaration are hoisted function expression are not

//4
// const kgToGr = (kg) => kg * 1000;
// kgToGr(25);

//Exercise 6

// (function (jT, gLoc, marTo, numC) {
//   myP = document.createElement("p");
//   myText = document.createTextNode(
//     `You will be a ${jT} in ${gLoc}, and married to ${marTo} with ${numC} kids.`
//   );
//   myP.appendChild(myText);
//   document.body.appendChild(myP);
// })("front end dev", "Tel aviv", "Mor", 23);

//Exercise 7

(function (name) {
  const userNameDiv = document.createElement("div");
  const userPicture = document.createElement("img");
  const navDiv = document.getElementsByTagName("nav")[0];
  const userName = document.createTextNode(`${name}`);
  userPicture.setAttribute(
    "src",
    "https://media.newyorker.com/photos/59095c501c7a8e33fb38c107/master/w_1280,c_limit/Monkey-Selfie-DailyShouts.jpg"
  );
  userPicture.setAttribute("height", "80px");
  userPicture.setAttribute("width", "80px");
  userNameDiv.appendChild(userName);
  userPicture.style.borderRadius = "20%";
  navDiv.style.display = "flex";
  navDiv.style.alignItems = "center";
  navDiv.style.border = "2px solid navy";
  navDiv.style.borderRadius = "18px";
  navDiv.style.gap = "1.5rem";
  navDiv.style.fontSize = "2rem";
  navDiv.append(userPicture, userName);
})("Tom");

// Exercise 8
// part1
// function makeJuce(size) {
//   function addIngredients(first, second, third) {
//     const aP = document.createElement("p");
//     const orderText = document.createTextNode(
//       `The client wants a ${size} juice, containing ${first}, ${second} and ${third}`
//     );
//     aP.appendChild(orderText);
//     document.body.appendChild(aP);
//   }
//   addIngredients("pecan", "banana", "strawberry");
// }
// makeJuce("big");

function makeJuce(size) {
  const ingredients = [];
  function addIngredients(first, second, third) {
    ingredients.push(first, second, third);
  }
  function displayJuice() {
    const aP = document.createElement("p");
    const orderText = document.createTextNode(
      `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]},${ingredients[3]}, ${ingredients[4]}and ${ingredients[5]}`
    );
    aP.appendChild(orderText);
    document.body.appendChild(aP);
  }
  addIngredients("lime", "corn", "pepper");
  addIngredients("pecan", "banana", "strawberry");
  displayJuice();
}
makeJuce("big");
