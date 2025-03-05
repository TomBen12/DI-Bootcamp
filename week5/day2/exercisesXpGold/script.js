// let landscape = function () {
//   let result = "";

//   let flat = function (x) {
//     for (let count = 0; count < x; count++) {
//       result = result + "_";
//     }
//   };

//   let mountain = function (x) {
//     result = result + "/";
//     for (let counter = 0; counter < x; counter++) {
//       result = result + "'";
//     }
//     result = result + "\\";
//   };

//   flat(4);
//   mountain(4);
//   flat(4);

//   return result;
// };

// landscape();

//____/''''\\____

//2

// const landscape = () => {
//   let result = "";
//   const flat = (x) => {
//     for (let count = 0; count < x; count++) {
//       result += "_";
//     }
//   };
//   const mountain = (x) => {
//     result += "/";
//     for (let counter = 0; counter < x; counter++) {
//       result += "'";
//     }
//     result += "\\";
//   };
//   flat(4);
//   mountain(4);
//   flat(4);
//   return result;
// };

//exercise 3
// const curriedSum = (a) => (b) => a + b;
// curriedSum(30)(1);
//31

// exercise 4
// const curriedSum = (a) => (b) => a + b;
// const add5 = curriedSum(5);
// add5(12);
// 17

//exercise 5
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10);
// 16

//f(g(a))
//g(a) == 10+5
//f(15) == 15+1
