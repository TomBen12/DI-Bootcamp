/**
 * Functions: Callback functions,
 * Anonymous functions,
 * Arrow functions,
 * Default parameters
 */

/**
 * Asynchronous: Promises, Async/Await
 */

/**
 * Fetch: GET / POST
 */

// http://example.com?name=John&email=jjj@gmail.com = query
// http://example.com/123/abc = params
// http://example.com

// fetch("http://example.com?name=John&email=jjj@gmail.com", {
//   method: "GET",
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// const name = "John"
// const email = "jjj@gmail.com"

// fetch("http://example.com", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({ name, email }),
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

/**
 * Strings: Template literals
 */
// `${name}`

/**
 * Array methods:
 * map,
 * filter,
 * find,
 * reduce,
 * findIndex,
 * slice, splice, forEach
 */

/**
 * Object & Array Destructuring
 * Function Destructuring,
 *  Spread Operator
 * Dynamic keys
 */

const a = "firstname";

let obj = {
  id: 123,
  gender: "m",
  [a]: "John",
};

// console.log(obj);

// const obj2 = { ...obj, id: 234, name: "John" };

// function getData({ id, gender }) {
//   console.log(id, gender);
// }

// getData(obj);

/**
 * Classes: constructor, this, extends, methods
 */

// class Animal {
//   constructor() {
//     this.name = "John";
//   }

//   getName() {
//     return this.name;
//   }

//   setName(param) {
//     this.name = param;
//   }
// }

// class Dog extends Animal {

// }
