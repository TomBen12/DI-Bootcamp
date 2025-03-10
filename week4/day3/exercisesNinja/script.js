// Ex1.
Math.floor(Math.random() * 101);

//Ex2
function capitalise(str) {
  let capitalArr = [];
  let capitalArrTwo = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      capitalArr.push(str[i].toUpperCase());
      capitalArrTwo.push(str[i]);
    } else {
      capitalArr.push(str[i]);
      capitalArrTwo.push(str[i].toUpperCase());
    }
  }
  return [capitalArr.join(""), capitalArrTwo.join("")];
}
//Ex3
function isPalindrome(str) {
  str = str.trim().toLowerCase();
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}
//Ex4
const array = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ["a", 3, 4, 2];
const array3 = [];

function biggestNumberInArray(arrayNumber) {
  let biggest = arrayNumber[0];
  for (let i = 0; i < arrayNumber.length; i++) {
    arrayNumber[i] > biggest && (biggest = arrayNumber[i]);
  }
  return biggest || 0;
}
// Ex5

function uniqueArray(array) {
  //   return Array.from(new Set(array));
  //or
  return [...new Set(array)];
}

//ex 6
function createCalendar(year, month) {
  ///to be continued
}
