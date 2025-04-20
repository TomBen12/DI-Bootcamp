"use strict";
// type number
let num = 1;
// num = 2;
// num = "a"; no!
// type string
let str;
str = "abc";
// str = 1 no
// type boolean
let bool = true;
bool = false;
// bool = 0 no!
let a;
a = 0;
a = "a";
a = true;
let myStrNum = 1;
myStrNum = "gaaa";
myStrNum = true;
// type arrays
let strArr = ["d", "b", "c"];
strArr.push("stringff");
// strArr.push(3)
let strNumArr = ["a", 4];
let myTuple = ["a", 1, "agaga"];
// type object
let myObj = {};
myObj = [];
const userJohn = {
    name: "john",
    age: 23,
    gender: "M",
};
const userMary = {
    name: "mary",
    age: 24,
};
const userDan = {
    name: "Dan",
    age: 11,
};
// type Enum
var Grade;
(function (Grade) {
    Grade[Grade["u"] = 0] = "u";
    Grade[Grade["d"] = 1] = "d";
    Grade[Grade["c"] = 2] = "c";
    Grade[Grade["b"] = 3] = "b";
    Grade[Grade["a"] = 4] = "a";
})(Grade || (Grade = {}));
let statuscode;
statuscode = "loading";
let student1 = {
    name: "a",
    grade: Grade.c,
    gender: "male",
    status: "success",
};
//fuctions
const sum = (a, b) => {
    return a + b + "";
};
const sum2 = (a, b) => {
    //typeguard
    if (typeof b === "string")
        return a + b + "";
    return a + b;
};
