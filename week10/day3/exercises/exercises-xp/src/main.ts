/* Exercise 1 */

type Person = {
  name: string;
  age: number;
};

type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const someone: PersonWithAddress = {
  name: "tom",
  age: 30,
  street: "Eldridge",
  city: "Montreal",
};

console.log(someone.age);

/* Exercise 2 */

const describeValue = (numOrStr: number | string): string => {
  if (typeof numOrStr === "number") return "This is a number";
  return "This is a string";
};

//Exercise 3

let variable: any = "hello";

let str = variable as string;

console.log(str.toUpperCase(), variable);

/*Exercise 4 */

const getFirstElement = (arr: (number | string)[]): string => {
  if (typeof arr[0] === "number") return arr[0].toString();
  return arr[0];
};

console.log(getFirstElement(["4", 2]));
console.log(getFirstElement([8, "3"]));

/* Exercise 5 */

function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

logLength([2, 3, 4]);
// logLength(2);
logLength("asd");

/* Exercise 6 */

type _Person = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  department: string;
};

type Employee = _Person & Job;

function describeEmployee(emp: Employee): string {
  if (emp.position === "Developer") return "code faster!";
  else if (emp.position === "Manager") return "work harder!";
  return "no such job!";
}

/* Exercise 7 */

function formatInput<T extends { toString(): string }>(input: T): string {
  const str = input.toString() as string;
  return str.toUpperCase();
}
console.log(formatInput(true));
