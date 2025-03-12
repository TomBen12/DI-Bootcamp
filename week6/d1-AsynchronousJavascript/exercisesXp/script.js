//Exercise 1

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve("under 10 : resolved");
    } else {
      reject("over 10 : rejected");
    }
  });
}
compareToTen(9)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

compareToTen(20)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//Exercise 2

const aPromise = new Promise((resolve) => {
  setTimeout(() => resolve("success"), 4000);
})
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//Exercise 3

const thisPromise = Promise.resolve(3).then((result) => console.log(result));

const thatPromise = Promise.reject("Boo!").catch((error) => console.log(error));
