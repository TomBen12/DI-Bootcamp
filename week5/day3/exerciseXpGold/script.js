//exercise 1
// [1, 2, 3].map((num) => {
//   if (typeof num === "number") return num * 2;
//   return;
// });
//[2,4,6]

//exercise 2
// [
//   [0, 1],
//   [2, 3],
// ].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2]
// );
//we concat the arrays but our initial array will be [1,2]

// [1,2,0,1,2,3]

//3
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i);
//   alert(num);
//   return num * 2;
// });
//i is the index... feels like a trick question or i'm missing smtn...

//exercise 4
//1
// const array = [[1], [2], [3], [[[4]]], [[[5]]]];

// array.reduce((prev, curr) => prev.concat(curr));
// 2;
// const greeting = [
//   ["Hello", "young", "grasshopper!"],
//   ["you", "are"],
//   ["learning", "fast!"],
// ];
//2
// greeting.reduce((prev, curr) => [...prev].concat(...curr));
//3
// greeting
//   .reduce((prev, curr) => [...prev].concat(...curr))
//   .reduce((prev, curr) => prev + " " + curr);

//4
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
// console.log(trapped.flat(Infinity));
