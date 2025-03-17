import { people } from "./data.js";
//exercise 2
const averageAge = (myPeople) => {
  let sum = 0;
  let numOfpeople = myPeople.length;
  myPeople.forEach((person) => {
    sum += person.age;
  });
  return sum / numOfpeople;
};

console.log(averageAge(people));
