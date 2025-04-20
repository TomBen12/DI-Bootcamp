"use strict";
//exercise 1
let message = "Hello World!";
console.log(message);
//exercise 2
let age = 30;
let myName = "Tom";
console.log(`my name is ${myName} and I'm ${age}.`);
let id;
id = 3;
id = "3";
// exercise 4
const getNumberStatus = (n) => {
    if (n > 0)
        return "positive";
    if (n < 0)
        return "negative";
    return "zero";
};
console.log(getNumberStatus(-1));
function getDetail(name, age) {
    let message = `Hello, ${name}! You are 25 years old.`;
    return [name, age, message];
}
const details = getDetail("Mor", 32);
console.log(details);
function createPerson(fName, age) {
    let someone = {
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
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["Editor"] = "editor";
    UserRole["Viewer"] = "viewer";
    UserRole["Guest"] = "guest";
})(UserRole || (UserRole = {}));
const getAction = (role) => {
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
function greet(name = "stranger") {
    return `Hello ${name}!`;
}
console.log(greet());
console.log(greet("Tom"));
