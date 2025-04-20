//exercise 1
let message: string = "Hello World!";
console.log(message);

//exercise 2
let age: number = 30;
let myName: string = "Tom";
console.log(`my name is ${myName} and I'm ${age}.`);

//exercise 3
type numstring = string | number;
let id: numstring;
id = 3;
id = "3";

// exercise 4
const getNumberStatus = (n: number): string => {
  if (n > 0) return "positive";
  if (n < 0) return "negative";
  return "zero";
};

console.log(getNumberStatus(-1));

// exercise 5
type Tuple = [string, number, string];
function getDetail(name: string, age: number): Tuple {
  let message = `Hello, ${name}! You are 25 years old.`;
  return [name, age, message];
}

const details = getDetail("Mor", 32);
console.log(details);

//exercise 6
type Person = {
  name: string;
  age: number;
};

function createPerson(fName: string, age: number): Person {
  let someone: Person = {
    name: fName,
    age: age,
  };
  return someone;
}

console.log(createPerson("steve", 50));

//exercise 7
// const inputElem = document.getElementById("txt") as HTMLInputElement;
// inputElem.value = "ts";
// console.log(inputElem.value);

//exercise 8

enum UserRole {
  Admin = "admin",
  Editor = "editor",
  Viewer = "viewer",
  Guest = "guest",
}

const getAction = (role: UserRole): string => {
  switch (role) {
    case UserRole.Admin:
      return "Manage users and settings";
    case UserRole.Editor:
      return "Edit content";
    case UserRole.Viewer:
    case UserRole.Guest:
      return "View content";
    default:
      return "Invalid role";
  }
};

//exercise 9
function greet(name: string = "stranger"): string {
  return `Hello ${name}!`;
}

console.log(greet());     
console.log(greet("Tom"));