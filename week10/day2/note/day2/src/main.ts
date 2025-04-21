type Operation = (a: number, b: number) => number;

const multi: Operation = (a, b) => {
  return a * b;
};

//default para
const addDefault = (a: number, b: number = 5): number => {
  return a + b;
};

// optional parameter
const addOptional = (a: number, b?: number) => {
  // type guard
  // if (b === undefined) return a;
  return a + (b || 0);
};

// function overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "string" && typeof b === "string") return a + b + "";
  if (typeof a === "number" && typeof b === "number") return a + b + "";
  return -1;
}

//never type

const errorMessage = (msg: string): never => {
  throw new Error(msg);
};

const numberOrString = (value: number | string | boolean): string => {
  if (typeof value === "string") return "value is a string";
  if (typeof value === "number") return "value is a number";
  return errorMessage("value is nor a number or a string");
};

//void type
const voidFunction = () => {
  console.log("hi");
};

// function listner() {
//   while (true) {
//     console.log("listnen");
//   }
// }

//assertion or casting

// as or < >

type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "abc";
let b: Two = a as Two;
b = "cde";
b = 1;

let c = a as Three;
c = "hello";

// let d = <One>"hid";
// let e = <Two>123
// let f = <Three>"hello"

// DOM elements
const myImg = document.querySelector("img");
if (myImg) myImg.src = "...";

// not null
const myImg2 = document.querySelector("img")!;
myImg2.src = "...";

const myImg3 = document.querySelector("img") as HTMLImageElement;
myImg3.src = "...";

const myImg4 = <HTMLImageElement>document.querySelector("img");
myImg3.src = "...";

///Exercise

// const year = document.getElementById("year") as HTMLSpanElement;
// const yearNow: string = new Date().getFullYear().toString();
// year ? (year.textContent = " " + yearNow) : null;

//classes
//access modifiers
//public anywhere
//protected within the class and subclasses
//private within the class

class User {
  public name: string;
  private age: number;
  protected active: boolean;

  constructor(name: string, age: number, active: boolean) {
    this.name = name;
    this.age = age;
    this.active = active;
  }

  getAge(): number {
    //.. from manager and up can acess (for example)
    return this.age;
  }
  setAge(val: number): void {
    this.age = val;
  }
}

const user1 = new User("john", 25, true);
// console.log(user1.name);
// user1.name = "Dan"
// console.log(user1.name)

console.log(user1.getAge());

class Student extends User {
  constructor(name: string, age: number, active: boolean) {
    super(name, age, active);
  }
  getStudentAge(): string {
    return this.name + " is " + this.getAge() + "year old";
  }

  isStudentActive(): string {
    return this.name + " is " + this.active;
  }
}

// const stud1 = new Student("anne", 26, true);
// console.log(stud1.isStudentActive());
// stud1.name = "Marry";
// console.log(stud1.name);

class MyUser {
  public _name: string;
  public _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  set name(val: string) {
    this._name = val;
  }

  get age(): number {
    return this._age;
  }

  set age(val: number) {
    this._age = val;
  }
}
