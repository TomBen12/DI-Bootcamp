// type number

let num: number = 1;
// num = 2;
// num = "a"; no!

// type string

let str: string;
str = "abc";

// str = 1 no

// type boolean
let bool: boolean = true;
bool = false;
// bool = 0 no!

let a: any;
a = 0;
a = "a";
a = true;

// union type
type strnum = string | number | boolean;

let myStrNum: strnum = 1;
myStrNum = "gaaa";
myStrNum = true;

// type arrays
let strArr: string[] = ["d", "b", "c"];
strArr.push("stringff");
// strArr.push(3)

let strNumArr: (string | number)[] = ["a", 4];

// type Tuple
type tupleT = [string, number, string];
let myTuple: tupleT = ["a", 1, "agaga"];

// type object
let myObj: object = {};
myObj = [];

// const user = {
//     name:'john',
//     age: 25
// }

// user.name = 'name'
// user.age = 13
// user.email = "asda@asdas"

type User = {
  name: string;
  age: number;
  gender?: string | number; // nullable : ?
};

const userJohn: User = {
  name: "john",
  age: 23,
  gender: "M",
};

const userMary: User = {
  name: "mary",
  age: 24,
};

// type / interface
interface UserI {
  name: string;
  age: number;
  gender?: string | number;
}

const userDan: UserI = {
  name: "Dan",
  age: 11,
};

// type Enum
enum Grade {
  u,
  d,
  c,
  b,
  a,
}

//type literal

type status = "fail" | "loading" | "success";
let statuscode: status;

statuscode = "loading";

//type Aliases

type NumberOrString = number | string;
type NumberOrStringOrBoolean = NumberOrString | boolean;

type UserT = {
  name: NumberOrString;
};

type Gender = "male" | "female" | "other";

type Student = {
  name: string;
  grade: Grade;
  gender: Gender;
  status: status;
};

let student1: Student = {
  name: "a",
  grade: Grade.c,
  gender: "male",
  status: "success",
};

//fuctions

const sum = (a: number, b: number): string => {
  return a + b + "";
};

//exercise

type strnum2 = string | number;

const sum2 = (a: number, b: strnum2): strnum2 => {
    //typeguard
  if (typeof b === "string") return a + b + "";
  return a + b;
};
