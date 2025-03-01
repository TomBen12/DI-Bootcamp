//Exercise 1
//1
// function alertInTwoSec() {
//   setTimeout(alert, 2000, "Hello World!");
// }
// alertInTwoSec();
//2
// function addNewP() {
//   const myP = document.createElement("p");
//   myP.innerText = "Hello World";
//   document.getElementById("container").appendChild(myP);
// }
// setTimeout(addNewP, 2000);

const newParagraphInterval = setInterval(() => {
  const container = document.getElementById("container");
  container.children.length == 4 && clearInterval(newParagraphInterval);
  const myP = document.createElement("p");
  myP.innerText = "Hello World!";
  container.appendChild(myP);
}, 2000);

//// document.getElementById("clear").addEventListener("click", () => {
////   clearInterval(newParagraphInterval);
//// });

