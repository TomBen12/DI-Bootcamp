//Ex1
// const person = {
//   name: "John Doe",
//   age: 25,
//   location: {
//     country: "Canada",
//     city: "Vancouver",
//     coordinates: [49.2827, -123.1207],
//   },
// };

// const {
//   name,
//   location: {
//     country,
//     city,
//     coordinates: [lat, lng],
//   },
// } = person;

// console.log(
//   `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
// );

//object preson is created and destructed as name, location object {country, city, and coordinates is also destructured from the object and addigned to lat and lng

//so that we have all  the keys exposed (for the console log) to call their value.

//Exercise 2
// function displayStudentInfo(objUser) {
//   const { first, last } = objUser;
//   return `your full name is ${first + " " + last}`;
// }

// displayStudentInfo({ first: "Elie", last: "Schoppik" });

// Exercise 3

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// for (const key in users) {
//   users[key] *= 2;
// }

// const myObj = Object.entries(users);

//4

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person("John");
// console.log(typeof member);

//typeof member is Person.

//Exercise 5

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
// // this one extends it successfully:
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// }

//Exercise 6
//1
// array and object are reference type . the === operator evaluate if they reference the same memory location.
// false and false

//2
//all the numbers will be equal to 4
//exept for object4, it has a new address in memory.

//1.
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// 2.
class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound(theSound) {
    return console.log(
      `${theSound}!! I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    );
  }
}

//3

const farmerCow = new Mamal("Dolly", "Cow", "red");

farmerCow.sound("Moooo");
