// Exercise 1
// 1.
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color, index) => {
//   console.log(`#${++index}.Choice is : ${color}`);
// });

// 2.

// colors.some((color) => color.includes("Violet"))
//   ? console.log("yes!")
//   : console.log("no...");

// Exercise 2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  let ord =
    index === 0
      ? ordinal[1]
      : index === 1
      ? ordinal[2]
      : index === 2
      ? ordinal[3]
      : ordinal[0];

  console.log(`${index + 1}${ord} choice is ${color}`);
});

//Exercise 3
// // ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ["bread", ...vegetables, "chicken", ...fruits];
// console.log(result);

// //the resul will be  ["bread", "carrot", "potato", "chicken", "apple", "orange"]
// // ------2------
// const country = "USA";
// console.log([...country]);

// //result is ["U","S","A"]

// // ------Bonus------
// let newArray = [...[, ,]];
// console.log(newArray);

// //result is [undefined,undefined,undefined]

//Exercise 4
// const users = [
//   { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
//   { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
//   { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
//   { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
//   { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
//   { firstName: "Wes", lastName: "Reid", role: "Instructor" },
//   { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
// ];
//1
// const welcomeStudents = users.map((user) => "Hello " + user.firstName);
//2
// const fullStack = users.filter(
//   (user) => user.firstName && user.role.includes("Full Stack")
// );

//3 bonus
// const fullStackLastname = users.filter(
//   (user) => user.firstName && user.role.includes("Full Stack")
// ).map((usr => usr.lastName))

//Exercise 5
const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

const starWars = epic.reduce((prev, curr) => prev + " " + curr);

//Exercise 6

const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

// const graduates = students.filter((student) => student && student.isPassed);
//bonus
const graduates = students
  .filter((student) => student && student.isPassed)
  .forEach((student) =>
    console.log(
      `Good job ${student.name}, you passed the course in ${student.course}`
    )
  );
