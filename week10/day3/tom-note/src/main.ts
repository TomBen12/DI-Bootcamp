/* classes with interfaces / type */

interface User {
  name: string;
  age: number;
  getAge(): number;
  setAge(age: number): void;
}

class Employee1 implements User {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.gender = "female";
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    this.age = age;
  }

  getName(): string {
    return this.name;
  }
}

const emp = new Employee1("dan", 22);

console.log(emp);
// class Manager extend Employee {
//   constructor() {
//     super()
//   }
// }

class Students {
  static count: number = 0;

  name: string;
  id: number;
  constructor(name: string) {
    this.name = name;
    this.id = ++Students.count;
  }
}

const student1 = new Students("john");
const student2 = new Students("dan");
const student3 = new Students("mary");

console.log(student1, student2, student3);

/* index signature /keys */
interface Employee {
  name: string;
  age: number;
  role: string;
}

const employee1: Employee = {
  name: "john",
  age: 33,
  role: "developer",
};

// console.log(employee1.name)
// console.log(employee1.name);
// employee1[prop1] =

/* record type */

type UserT = {
  name: string;
  age: number;
};

type keys = "name" | "age";

type UserR = Record<keys, string>;

const user1: UserT = {
  name: "a",
  age: 1,
};

// const user2: UserR = {
//   name: "1",
//   age: "abc",
// };

/* Generics */

const strEcho = (value: string): string => {
  return value;
};
const numEcho = (value: number): number => {
  return value;
};
const boolEcho = (value: boolean): boolean => {
  return value;
};

const echo = <T>(value: T): T => value;
